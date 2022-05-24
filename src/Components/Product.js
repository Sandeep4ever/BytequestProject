import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import bagimg from "./Image/bagimg.svg";
import Group304 from "./Image/Group 304.svg";
import Group305 from "./Image/Group 305.svg";
import Group307 from "./Image/Group 307.svg";
import Group300 from "./Image/Group 300.svg";
import totebag from "./Image/totebag.svg";
import duffle from "./Image/duffle.svg";
import vanity from "./Image/vanity.svg";

const Product = () => {
  const [productImage, setproductImage] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
      )
      .then((res) => {
        console.log(res.data.data.products);
        setproductImage(res.data.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(productImage, "pro");
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await axios.get(
    //     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
    //   );
    //   console.log(res);
    // };
    fetchData();
  }, []);
  return (
    <>
      <div className="Product_Container">
        <div className="Product_img">
          <img src={bagimg} alt="bagimg" />
          <img src={Group307} alt="Group307" />
          <img src={Group300} alt="Group300" />
          <img src={duffle} alt="duffle" />
          <img src={Group305} alt="Group305" />
          <img src={totebag} alt="totebag" />
          <img src={Group304} alt="Group304" />
          <img src={vanity} alt="vanity" />
        </div>
        {/* Card section */}
        {productImage &&
          productImage.map((items) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={items.id}>
                <img
                  src={items.plpimaage}
                  className="card-img-top"
                  alt="plpimgae"
                />
                <div className="card-body">
                  <h6 className="card-title">{items.name}</h6>
                  <div className="text_sec">
                    <p>{items.special_price}</p>
                    <span>{items.price}</span>
                    <span> ({items.discount}% off)</span>
                  </div>
                  {/* <p className="card-text"></p>
                  <p>{items.price}</p>
                  <p>off {items.discount}</p>
                  console.log(itmes) */}
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
