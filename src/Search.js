import React,{useState,useEffect} from "react";
import mainStaticData from "./mainData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Demo from'./errorPage.png';
import Product from "./Product";
import Spinner from "./Spinner";

export default function Search() {
  const [mainData,setMainData] = useState(mainStaticData);
  const [loading,setLoading] = useState(false);
  
  // Code For DATABASE Connection
  // const [loading,setLoading] = useState(true);
  // const getProducts= async ()=>{
  //   const rawData = await fetch("http://localhost:5000/");
  //   const data = await rawData.json()
  //   setTimeout(()=>{
  //     setLoading(false);
  //   },1000);
  //   setMainData(data);
  // }
  // useEffect(()=>{
  //   getProducts();
  // },[])


  let random=[];
  let i = 0;
  while(i<4){
  const mathValue = (Math.round(Math.random() * 16));
  if(!random.includes(mathValue)){
  random.push(mathValue);
  i++;
  }
  } 
  window.scrollTo(0, 0);
  let c=0;
  const { categoryType } = useParams();
  if(loading){
    return <Spinner/>
  }
  return (
    <div>
      <div className="searchResult">
        <h1>{`Showing Result For "${categoryType}"`}</h1>
        {
        mainData
          .filter((filterValue) => {

            return (filterValue.category.toLowerCase() === `${categoryType.toLowerCase()}`) || filterValue.LongName.toLowerCase().includes(categoryType.toLowerCase()) ;
          })
          .map((value) => {
            c++;
            return (
              <>
                <Link to={`/productPage/id/${value.id -1}`} className="searchItem">
                  <div className="imgDiv">
                    <img src={value.imageUrl} alt="error" />
                  </div>
                  <div className="secondDiv">
                    <h2>{value.LongName.slice(0, 40) + "..."}</h2>
                    <ul id="searchHighlight">
                      <li>128 GB ROM</li>
                      <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                      <li>12MP + 12MP | 12MP Front Camera</li>
                      <li>A15 Bionic Chip Processor</li>
                    </ul>
                    <h2 className="price big">{value.price}</h2>
                  </div>
                  <h2 className="price small">{value.price}</h2>
                  <span id="heart" className="material-symbols-rounded">
                    favorite
                  </span>
                </Link>
              </>
            );
          })
          }
          {c===0 && <>
          <div className="noSearch" >
            <img src={Demo} alt="Error" /> 
            <h1>Sorry! No Result Found</h1>
          </div>
          <Product array={random} message="Try These"/>
          </>
          }
          </div>
    </div>
  );
}
