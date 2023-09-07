import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const menu = () => {
  document.getElementsByClassName("dynamicNavbar")[0].classList.remove("hide");
};

const close = () => {
  document.getElementsByClassName("dynamicNavbar")[0].classList.add("hide");
};

const login = () => {
  document.querySelector(".loginBackground").classList.remove("hide");
};

export default function Navbar() {
  const navigate = useNavigate();
  const selectCategory = (e) => {
    if (e.target.value === "/") {
      navigate(`/`);
    } else {
      navigate(`categoryPage/${e.target.value}`);
    }
  };
  const [search, setSearch] = useState();

  const onchangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchResult = () => {
    navigate(`categoryPage/${search}`);
  };
  return (
    <div>
      <nav class="StaticNavbar">
        <Link to="/" id="logo">
          LOGO
        </Link>

        <div class="first">
          <select onChange={selectCategory} name="">
            <option id="test" value="/">
              Category
            </option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
            <option value="Smart Watch">Smart Watch</option>
            <option value="Printer">Printer</option>
            <option value="Camera">Camera</option>
            <option value="TV">TV</option>
            <option value="Headphone">Head Phone</option>
            <option value="Speaker">Speaker</option>
          </select>
          <input
            onChange={onchangeSearch}
            type="text"
            placeholder="Search Products"
          />
          <span
            onClick={searchResult}
            id="iconSize"
            class=" material-symbols-outlined"
          >
            search
          </span>
        </div>

        <div class="second">
          <div class="secondFirst">
            <span id="iconSize" class="material-symbols-rounded demo">
              shopping_cart
            </span>
            <p>Cart</p>
          </div>
          <div onClick={login} class="secondSecond">
            <span id="iconSize" class="material-symbols-rounded">
              input
            </span>
            <p>Log in</p>
          </div>
          <div id="menu" class="secondThird" onClick={menu}>
            <span id="iconSize" class="material-symbols-rounded">
              menu
            </span>
          </div>
        </div>
      </nav>

      <nav class="dynamicNavbar hide">
        <div class="dynamicNavbarinnerDiv">
          <ul>
            <li class="dynamicList">
              {" "}
              <span id="iconSize" class="material-symbols-rounded">
                home
              </span>{" "}
              Home
            </li>
            <li class="dynamicList">
              {" "}
              <span id="iconSize" class="material-symbols-rounded">
                person
              </span>
              Profile
            </li>
            <li class="dynamicList">
              {" "}
              <span class="material-symbols-rounded" id="demo">
                shopping_cart
              </span>
              Cart
            </li>
            <li class="dynamicList">
              {" "}
              <span id="iconSize" class="material-symbols-rounded">
                local_shipping
              </span>
              Order
            </li>
            <li class="dynamicList">
              {" "}
              <span id="iconSize" class="material-symbols-rounded">
                help_center
              </span>
              Complaint
            </li>
            <li class="dynamicList">
              {" "}
              <span id="iconSize" class="material-symbols-rounded">
                info
              </span>
              About Us
            </li>
          </ul>

          <span onClick={close} id="close" class="material-symbols-outlined">
            close
          </span>
        </div>
      </nav>

      <Login />
    </div>
  );
}
