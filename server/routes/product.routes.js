const express = require("express");
const db = require("../utils/database");
const { filterBycategory } = require("../middlewares/product.middlewares");
const routes = express.Router();

routes.get("/", filterBycategory, async (req, res) => {
  try {
    let result = await db.execute("SELECT * FROM products");
    let [rows] = result;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

routes.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let result = await db.execute(
      `SELECT p.* , m.scoure
      FROM products as p
      INNER JOIN media as m
      WHERE id_products = ?`,
      [id]
    );
    let [rows] = result;
    let scoures = [];
    let product = rows.reduce((pre, cur) => {
      scoures.push(cur.scoure);
      return { ...cur, scoures: [...scoures] };
    }, {});
    delete product.scoure;

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

module.exports = routes;
