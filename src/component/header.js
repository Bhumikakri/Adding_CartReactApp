// import { useState } from 'react';
import './header.css';
const Header =(props) =>{

    return(
        <div className='header'>
            <h1>UseReducer</h1>
            <h1>🛒<span>{props.val}</span></h1>
        </div>
    );
}

export default Header;