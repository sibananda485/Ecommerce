import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import mainStaticData from "./mainData";
import { Link } from "react-router-dom";

export default function DetailProduct() {
  const [mainData, setMainData] = useState(mainStaticData);
  const [loading, setLoading] = useState(false);
  


  // Code For DATABASE Connection
  // const [loading, setLoading] = useState(true);

  // const getProducts = async () => {
  //   const rawData = await fetch("http://localhost:5000/");
  //   const data = await rawData.json();
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   setMainData(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  window.scrollTo(0, 0);
  let random = [];
  let i = 0;
  while (i < 4) {
    const mathValue = Math.round(Math.random() * 16);
    if (!random.includes(mathValue)) {
      random.push(mathValue);
      i++;
    }
  }
  const { id } = useParams();
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div class="wideSection">
          <div class="leftSection">
            <div id="imgDiv">
              <img src={mainData[parseInt(id)].imageUrl} alt="error" />
            </div>
            <div id="button">
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </div>
          </div>

          <div class="rightSection">
            <div id="topHeading">
              <h1 id="productName">{mainData[parseInt(id)].LongName}</h1>
              <br />
              <h2 id="productPrice">{mainData[parseInt(id)].price}</h2>
            </div>

            <div id="offer">
              <p id="offerHeading">Available offers</p>
              <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
              <p>
                Bank Offer₹2000 Off On HDFC Bank Credit Card TransactionsT&C
              </p>
              <p>
                Bank Offer₹2000 Off On HDFC Bank Debit Card EMI TransactionsT&C
              </p>
              <p>
                Special PriceGet extra ₹5000 off (price inclusive of
                cashback/coupon)T&C
              </p>
            </div>

            <div id="highPayment">
              <div id="highLight">
                <p id="highlightHeading">Highlight</p>
                <ul>
                  <li>128 GB ROM</li>
                  <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                  <li>12MP + 12MP | 12MP Front Camera</li>
                  <li>A15 Bionic Chip Processor</li>
                </ul>
              </div>

              <div id="paymentOption">
                <p id="paymentOptionHeading">
                  Easy Payment <br /> Options
                </p>
                <ul>
                  <li>No cost EMI starting from ₹2,542/month</li>
                  <li>Cash on Delivery</li>
                  <li>Net banking</li>
                  <li>Credit/ Debit/ ATM card</li>
                </ul>
              </div>
            </div>

            <div id="description">
              <p id="descriptionHeading">Description</p>
              <ul>
                <li Style={{ listStyle: "none" }}>
                  iPhone 13. boasts an advanced dual-camera system that allows
                  you to click mesmerising pictures with immaculate clarity.
                  Furthermore, the lightning-fast A15 Bionic chip allows for
                  seamless multitasking, elevating your performance to a new
                  dimension. A big leap in battery life, a durable design, and a
                  bright Super Retina XDR display facilitate boosting your user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="ProductComponent">
          <div className="viewMoreDiv">
            <h1>Similar Products</h1>
          </div>
          <div className="product">
            {mainData
              .filter((filterValue) => {
                return filterValue.category === `${mainData[id].category}`;
              })
              .map((value) => {
                return (
                  <>
                    <Link
                      to={`/productPage/id/${value.id - 1}`}
                      className="productItem"
                    >
                      <div className="imgDiv">
                        <img src={value.imageUrl} alt="logo" />
                      </div>
                      <h3>{value.name.slice(0, 15)}</h3>
                      <p>
                        {" "}
                        <b>{value.price}</b>{" "}
                      </p>
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
        <Product array={random} message="You might Like" />
      </div>
    );
  }
}
