const db = require("../utils/database");
module.exports.filterBycategory = async (req, res, next) => {
  let { category } = req.query;
  console.log(category);
  try {
    let result = await db.execute(
      `
    SELECT 
    p.id_products, p.name as product_name, p.number, p.price, p.sale,
    c.name as description_name, c.description, c.banner
    FROM products as p
    INNER JOIN category as c
    ON p.id_category = c.id_category
    WHERE c.name = ?
    `,
      [category]
    );
    let [rows] = result;
    if (rows.length === 0) {
        next();
    } else {
        res.status(200).json(rows);
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
