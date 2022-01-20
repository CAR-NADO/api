import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
  let price = 20.1233215643
  console.log(price.toFixed(2));
  const [userInfo,setUserInfo] = useState([])
  useEffect(()=> {
    api();
  }, [])


  const api = async () => {
    let result = await fetch("https://fakestoreapi.com/products")
    result = await result.json()
    console.log("result",result)
    setUserInfo(result)

  }


  return (
    <>
    <div className="header">
    {
      userInfo.map((data)=>{
        console.log("data",data)
        return(
          <div className="card">
      <div className="left_Image">
      <img src={data.image} id='image_CSS' />
      </div>
      <div className="right_Content">
        <h4 id='h41'>{data.category}</h4>
        <h4 id='h42'>Rs. {data.price}</h4>
        <div className="lower_Content">
          <div className="one">
            <h4 id='h43'>Avaible</h4>
            <h5 id='h44'>{data.rating.count}</h5>
          </div>
          <div className="two">
            <h4 id='h43'>Product Code</h4>
            <h5 id='h44'>{(data.rating.rate*1.7).toFixed(2)}</h5>
          </div>
          <div className="three">
            <h4 id='h43'>Rating</h4>
            <h5 id='h44'>{data.rating.rate}</h5>
          </div>
        </div>
      </div>
    </div>
        )
      })
    }
    </div>
    </>
  );
}
  
export default Card;
