import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "./mainData";

export default function Category() {

  window.scrollTo(0, 0);
  
  return (
    <div id="CategoryComponent">
      <div className="viewMoreDiv">
        <h1>Categories</h1>
        <span id="arrowIcon" class="material-symbols-outlined">
          arrow_forward
        </span>
      </div>
      <div className="category">
        {categoryData.map((value, index) => {
          return (
            <>
              <Link
                to={`categoryPage/${value.category}`}
                className="categoryItem"
              >
                <div className="imgDiv">
                  <img src={value.imgUrl} alt="Error" />
                </div>
                <h3>{value.firstHeading}</h3>
                <p>{value.secondHeading}</p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
