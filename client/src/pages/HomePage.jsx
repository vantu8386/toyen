import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import axios from "axios";

export default function HomePage() {
  const [productsYen, setProductsYen] = useState([]);
  const [productsSam, setProductsSam] = useState([]);

  // console.log(productsSam);
  const loadProducts = () => {
    axios
      .get("http://localhost:3000/api/v1/products?category=to yen")
      .then((res) => {
        setProductsYen(res.data);
        // console.log("res.data:", res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/api/v1/products?category=sam nhat pham")
      .then((res) => {
        setProductsSam(res.data);
        console.log("res.data:", res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Carousel></Carousel>
      <section className="secsition-thuong-vi-yen">
        <div className=" banner">
          <div className="">
            <img src={productsYen.length > 0 && productsYen[0].banner} alt="" />
          </div>
          <div className=" banner">
            <h3>{productsYen.length > 0 && productsYen[0].description_name}</h3>
          </div>
        </div>
        <div className="">
          <div className="all_product">
            <div className="product_home">
              <Products products={productsYen} />
            </div>
          </div>
        </div>
      </section>
      <section className="secsition-thuong-vi-sam">
        <div className=" banner">
          <div className="">
            <img src={productsSam.length > 0 && productsSam[0].banner} alt="" />
          </div>
          <div className=" banner">
            <h3>{productsSam.length > 0 && productsSam[0].description_name}</h3>
          </div>
        </div>
        <div className="">
          <div className="all_product">
            <div className="">
              <Products products={productsSam} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
