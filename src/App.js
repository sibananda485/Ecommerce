import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import CategoryPage from "./CategoryPage";
import Product from "./Product";
import Crausal from "./Crausal";
import Footer from "./Footer";
import Login from "./Login";
import DetailProduct from "./DetailProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Register from "./Register";

setTimeout(() => {
  document.querySelector(".loginBackground").classList.remove("hide");
}, 5000);

export default function App() {
  let random = [];
  let i = 0;
  while (i < 4) {
    const mathValue = Math.round(Math.random() * 16);
    if (!random.includes(mathValue)) {
      random.push(mathValue);
      i++;
    }
  }
  window.scrollTo(0, 0);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Login />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Crausal />
                <CategoryPage />
                <br />
                <Category />
                <Product array={random} message="Some Popular" />
              </>
            }
          />
          <Route
            path="productPage/id/:id"
            element={
              <>
                <br />
                <br />
                <DetailProduct />
              </>
            }
          />
          <Route
            path="newRegister"
            element={
              <>
                {" "}
                <br /> <br /> <br /> <br /> <br /> <Register />{" "}
              </>
            }
          />
          <Route
            path="categoryPage/:categoryType"
            element={
              <>
                <br /> <br /> <br /> <br /> <br /> <br /> <Search />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
