import React from "react";
import mainData from "./mainData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  window.scrollTo(0, 0);
  const { categoryType } = useParams();

  return (
    <div>
      <div id="ProductComponent">
        <div className="viewMoreDiv">
          <h1>{categoryType}</h1>
        </div>
        <div className="product">
          {mainData
            .filter((filterValue) => {
              return filterValue.category === `${categoryType}`;
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
    </div>
  );
}
