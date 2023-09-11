import React from "react";


export default function BreadCrumb() {
  return (
    <div>
      <div style={{marginLeft: "50px"}}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
