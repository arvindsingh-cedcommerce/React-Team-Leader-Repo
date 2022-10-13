import React, { useState } from "react";
import "./Product.css";
import CartContext from "../Context";
import { useContext } from "react";
import { Modal } from "@mui/material";

const Product = () => {
  const {
    selectList,
    addCart,
    setAddCart,
    setNumber,
    setAmount,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [singleIndex, setSingleIndex] = useState();
  var temp1 = [];

  // ADD TO CART FUNCTION
  const addToCart = (event) => {
    let count = 0;
    addCart.map((item) => {
      if (event.currentTarget.className == item.id) {
        if (!temp1.includes(item.id)) {
          count = count + 1;
          temp1.push(item.id)
        }
      }
    })

    if (count === 0) {
      setAddCart([...addCart, { ...selectList[event.currentTarget.id] }]);
    }
  };
  setNumber(addCart.length);

  setAmount(
    addCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
  );

  // SINGLE PAGE FUNCTION
  const singlPageOpen = (event) => {
    setOpen(true);
    setSingleIndex(event.currentTarget.id);
  };

  return (
    <div className="mainProduct">
      <div className="productImage">
        <img src="offer.png" alt="" />
      </div>

      {/* product listing  */}
      <div className="ProductList">
        {selectList.map((item, index) => {
          return (
            <div className="singleProduct" key={index}>
              <div className="container" id={index} onClick={singlPageOpen}>
                <div className="image-card">
                  <img src={item.image} alt="" />
                  {item.offer !== 0 ? <span>{item.offer}% OFF</span> : null}
                </div>
              </div>

              <h4>{item.name}</h4>
              <div id="reviews">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
              </div>
              <div className="singleproductInfo">
                <p id="unit">{item.unit}</p>
                <p id="prevAmount">
                  <del>&#8377;{item.prevPrice}.00</del>
                </p>
                <p id="productprice">&#8377;{item.currentPrice}.00</p>
              </div>

              <div id="addCart">
                <button onClick={addToCart} className={item.id} id={index}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div id="modal1">
          <h3 style={{ color: 'green', marginTop: '-2px', marginBottom: '10px' }}>15% Save</h3>
          {selectList.map((item, index) => {
            return index == singleIndex ? (
              <div className="mainModal">
                <div className="modalChild">
                  <div className="modalImage">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="modalContent">
                    <h4>{item.name}</h4>
                    <div id="reviews">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half"></i>
                    </div>
                    <div id="unit">{item.unit}</div>
                    <p>
                      <span>
                        <del>&#8377;{item.prevPrice}.00</del>
                      </span>
                      &#8377;{item.currentPrice}.00
                    </p>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </Modal>
    </div>
  );
};

export default Product;
