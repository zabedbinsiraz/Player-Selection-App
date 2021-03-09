import React from 'react';
import Button from 'react-bootstrap/Button';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    
    const totalBudget = cart.reduce((total, nextPlayer) => total+nextPlayer.salary,0);
    return (
        <div className="cartDetails">
            <h3> Selected Players : {cart.length}</h3> 
            
            <h5>{
                   cart.map(item => <p>{item.name} &nbsp; &nbsp; &nbsp; {item.salary}</p>)
                }</h5>
            <h3> Total Budget : {totalBudget} </h3>
            <Button className="btn" variant="warning">Selection Confirm</Button>{' '}
        </div>
    );
};

export default Cart;