import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import ProductCarousel from "../components/ProductCarousel";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products/" + id)
      .then((res) => {
        setProduct(res.data);
        console.log("res.data:", res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ProductPage">
      <NavBar />
      <BreadCrumb />
      <div className="container product_detail">
        <div className="row">
          <h3 className="prosuct_name">{product.name}</h3>
          <i className="product_sku">SKU: {product.id_products}</i>
          <p className="mini_description">
            <span className="mini_description_item product_origin">
              {product.name}
            </span>
            <span className="mini_description_item product_statust">
              <b>tinh trang</b> : (
              {product.number === 0 ? "hết hàng" : "còn hàng"})
            </span>
            <span className="mini_description_item product_sell">
              đã bán: 12 sp
            </span>
          </p>
        </div>
        <div className="row">
          <div className="col-5">
            {product?.scoures?.length > 0 && (
              <ProductCarousel scoures={product?.scoures} />
            )}
          </div>
          <div className="col-4">
            
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
