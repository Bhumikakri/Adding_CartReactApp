import {useState} from 'react';
import Card from './card';
import './header';
import './main.css'


export default function Main(prop){

    const[getingArray,setgetingArray] = useState([]);
    const [totalPrice,settotalPrice] = useState(2199.99);

    function getingarraya(value){
        // console.log(value);
        // let updatedvalue=[...value]
        setgetingArray((value)=>[...value]);
        // console.log(value);
        prop.pusingArray(value);

        let totalPrice = value.reduce((total, item) => {
            return total + item.quantity * parseFloat(item.Price.replace('$', ''));
        }, 0)
        settotalPrice(totalPrice.toFixed(2)); 
    }

    function allClear(){
        document.getElementById('main').innerHTML=' <div class="blank">in empty</div>';
        document.querySelector('.header span').innerHTML='0';
        setgetingArray([]);
        settotalPrice(0);
    }

    return(
        <div className='mainContainer'>
            <h1>YOUR BAG</h1>
            <div className='main' id='main'>
                <Card clearvalue={getingarraya}/>
                <div className="totalPrice">
                    <h2>Total Price:</h2>
                    <h3>${totalPrice}</h3>
                </div>
                <button  className="Btn"onClick={allClear}
                >Clear Cart</button>
            </div>
        </div>
    );
}