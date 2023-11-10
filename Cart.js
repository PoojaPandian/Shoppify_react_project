import React from 'react';
import './Cart.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



const Cart = ({ cart, handleRemoveProduct, handleAddProduct }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className='cart1'>
            <h3>Cart Items</h3>
            <h5>Total: ({cart.length})</h5>
            {cart.length === 0 ? (<p>Your cart is empty.</p>
            ) : (
                <div className='cart2'>
                    {cart.map((item) => (
                        <div key={item.id} className='cart_div'>
                           
                            <td>
                                <img className='cart_img' src={item.images[0]} alt={item.title} />
                            </td>
                            <td>
                                <p>{item.title}</p>
                                <p>Price: &#8377;{item.price * 80}</p>
                            </td>
                            <td className='button_div7'>
                                <button className='button7' onClick={() => handleAddProduct(item)}>+</button>
                                <div>{item.quantity}</div>
                                <button className='button7' onClick={() => handleRemoveProduct(item)}>-</button>
                            </td>
                            <td style={{padding:'3%'}}>₹ {(item.price * 80) * item.quantity}</td>
                            
                        </div>


                    ))}
                    <div>
                        <div>Total
                            ({cart.length})</div>
                        {/* {cart.map((item) => (
                        <div key={item.id}>{(item.price * 80) * item.quantity}*{cart.length}</div>))} */}
                    </div>
                </div>

            )
            }
        </div >
    )
}

export default Cart; 
