import { useState } from "react";
import './card.css';

const Card=(props)=>{

    const[Cart,setCart]=useState([{
        Product:"Samsung Galaxy S8",
        Price:"$399.99",
        quantity:1
    },
    {
    Product:"Google Pixel",
    Price:"$499.99",
    quantity:1
    },
    {
    Product:"Xiaomi Redmi Note 2",
    Price:"$699.99",
    quantity:1
    },
    {
    Product:"Samsung Galaxy S7",
    Price:"$599.99",
    quantity:1
    }]);


    function removeItem(idx){
        let udatedcardvalue=[...Cart]
        if(udatedcardvalue[idx].quantity>1){
            udatedcardvalue[idx].quantity -= Number(1);
        }
        else{
            udatedcardvalue.splice(idx, 1);
        }
        
        setCart([...udatedcardvalue]);
        props.clearvalue([...udatedcardvalue]);
    }

    function addItem(idx){
        let udatedcardvalue=[...Cart]
        udatedcardvalue[idx].quantity += 1;
        setCart([...udatedcardvalue]);
    //    console.log(udatedcardvalue)
        props.clearvalue(udatedcardvalue);
    }


    return (
        <>
        {
            Cart.map((item,idx) => {
                return (
                    <div className="card">
                        <div className="NamePrice">
                            <h2>{item.Product}</h2>
                            <p>{item.Price}</p>
                        </div>
                        <div className="btns">
                            <button onClick={()=>{
                               removeItem(idx) 
                            }}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>{
                               addItem(idx) 
                            }}>+</button>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}

export default Card;