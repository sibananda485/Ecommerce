import React,{useState,useEffect} from "react";
import Spinner from "./Spinner"
import { Link } from "react-router-dom";
import mainStaticData from "./mainData";



export default function  Product(props) {
  const [mainData,setMainData] = useState(mainStaticData);
  const [loading,setLoading] = useState(false);


  // Code For DATABASE Connection
  // const [loading,setLoading] = useState(true);

  // const getProducts= async ()=>{
  //   const rawData = await fetch("http://localhost:5000/");
  //   const data = await rawData.json()
  //   setMainData(data);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   getProducts();
  // },[])


  if(loading){
    return <Spinner/>;
  }
  return (
    <div id="ProductComponent">
      <div className="viewMoreDiv">
        <h1>{props.message}</h1>
        <span id="arrowIcon" class="material-symbols-outlined">
          arrow_forward
        </span> 
      </div>
      <div className="product">

      {
        props.array.map((value,index)=>{
          return(<>
            <Link to={`/productPage/id/${value}`} className="productItem">
            <div className="imgDiv">
            <img src={mainData[value].imageUrl}alt="logo"/>
            </div>
            <h3>{mainData[value].name.slice(0,15)}</h3>
            <p> <b>{mainData[value].price}</b> </p>
            </Link>
          </>)
        })
      }

            
            

      </div>
    </div>
  );
}
