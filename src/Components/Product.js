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
import group450 from "./Image/Group 450.svg";
import bookmark from "./Image/Bookmark.svg";

const Product = () => {
  const [productImage, setproductImage] = useState([]);
  const [review, setreview] = useState([]);
  const [loader, setloader] = useState(true);

  const fetchData = () => {
    axios
      .get(
        "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
      )
      .then((res) => {
        console.log(res, "data");
        if (res && res.status === 200 && res.data.data.products.length) {
          setproductImage(res.data.data.products);
          setloader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(productImage, "pro");
  useEffect(() => {
    fetchData();
  }, []);
  const handleReview = (id) => {
    console.log(id);
    productImage.forEach((item) => {
      if (item.id === id) {
        console.log(item);
        // Not any element inside the review section so I have to show size element
        setreview(item.sizes);
      }
    });
  };
  return (
    <>
      {loader && (
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loader && (
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
          <div className="productType">
            <p>Dress</p>
            <p> {productImage.length} Products</p>
          </div>

          <div className="card_container">
            {productImage && productImage.length > 0 ? (
              productImage.map((items) => {
                return (
                  <div
                    className="card"
                    style={{ width: "18rem" }}
                    key={items.id}
                  >
                    <img
                      src={items.plpimaage}
                      className="card-img-top"
                      alt="plpimgae"
                    />
                    <img className="bookmar" src={bookmark} alt="bookmark" />
                    <div className="card-body">
                      <h6 className="card-title">{items.name}</h6>
                      <div className="text_sec">
                        <span className="srectal_price">
                          &#x20B9; {items.special_price}
                        </span>
                        <span className="price">{items.price}</span>
                        <span className="discount">
                          {" "}
                          ({items.discount}% off)
                        </span>
                        <img className="addimg" src={group450} alt="group450" />
                      </div>
                      <button
                        onClick={() => handleReview(items.id)}
                        type="button"
                        className="btn btn-primary mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Sorry No any content</div>
            )}
          </div>
          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Review
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {review && review.length > 0 ? (
                    review.map((item, index) => (
                      <div key={index}>
                        <p> Size: {item}</p>
                      </div>
                    ))
                  ) : (
                    <div>Sorry No any content</div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
