import React from "react";
import { formatCurrency } from "../helpers";

export default function Products(props) {
  const { products } = props;

  return (
   <div>
     <div className="products-yen">
      {products.map((e, i) => (
        <div key={i} className="card" style={{ width: "18rem" }}>
          <div>sale: {e.sale * 100}%</div>
          <img
            src="https://product.hstatic.net/200000404397/product/tinh_che_1_c8d7ce529c244aa3ab855e9a34c8a990_large.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{e.product_name}</h5>
            <p className="card-text">{e.description}</p>
            <i className={e.sale ? `full-price sale` : "full"}>
              {formatCurrency(e.price)}
            </i>
            <b>{e.sale && formatCurrency(e.price * e.sale)}</b>
            <p>
              so luong:{" "}
              {e.number === 0
                ? "het hang"
                : `${e.number} ${e.number <= 10 ? <i>(sap het hang)</i> : ""}`}
            </p>
            <button className="btn btn-primary">chi tiet</button>
          </div>
        </div>
      ))}
    </div>

    {/* <div className="products-sam">
      {productsSam.map((e, i) => (
        <div key={i} className="card" style={{ width: "18rem" }}>
          <img
            src="https://product.hstatic.net/200000404397/product/tinh_che_1_c8d7ce529c244aa3ab855e9a34c8a990_large.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{e.product_name}</h5>
            <p className="card-text">{e.description}</p>
            <i className={e.sale ? `full-price sale` : "full"}>
              {formatCurrency(e.price)}
            </i>
            <b>{e.sale && formatCurrency(e.price * e.sale)}</b>
            <p>
              so luong:{" "}
              {e.number === 0
                ? "het hang"
                : `${e.number} ${e.number <= 10 ? <i>(sap het hang)</i> : ""}`}
            </p>
            <button className="btn btn-primary">chi tiet</button>
          </div>
        </div>
      ))}
    </div> */}
   </div>
  );
}
