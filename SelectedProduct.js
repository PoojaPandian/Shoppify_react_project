import React from 'react';
import { useState, useEffect } from 'react';
import './SelectedProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {faAnglesLeft} from '@fortawesome/free-solid-svg-icons';

const SelectedProduct = ({selectedProducts, handleClose, handleAddProduct}) => {
  const[currentImage, setCurrentImage]= useState(0);


  // const handleAddToCart = () => {
  //   onAddToCart(selectedProducts.id);
  // };

  const nextImage = () => {
    if (currentImage === selectedProducts.images.length -1){
      setCurrentImage(0);
    }else{
      setCurrentImage(currentImage + 1);
    }
  }

  const prevImage = () => {
    if (currentImage === 0){
      setCurrentImage(selectedProducts.images.length -1);
    }else{
      setCurrentImage(currentImage - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  },[]);

  return(
    <div>
      <div className='div1'>
        <h4>Product Details</h4>
        <div>
          <div className='button_div' onClick={handleClose}><FontAwesomeIcon icon={faCircleXmark}/></div>
        </div>
      </div>
      <div className='div_2' style={{display:'flex', justifyContent:'space-around'}}>
        <div className='d2d'>
          <div onClick={prevImage}><FontAwesomeIcon icon={faAnglesLeft} rotation={90} /></div>
          <img className='img-div' src={selectedProducts.images[currentImage]} alt={`${selectedProducts.title} - ${currentImage + 1}`}/>
          <div onClick={nextImage}><FontAwesomeIcon icon={faAnglesLeft} rotation={270} /></div>
        </div>
      
        <div className='d3d' style={{width:'300px', marginTop:'5%'}}>
          <p>Brand: {selectedProducts.brand}</p>
          <p>Title: {selectedProducts.title}</p>
          <p>Price: ₹ {selectedProducts.price *83}</p>
          {/* <button>Buy Now</button> */}
          <button onClick={()=>handleAddProduct(selectedProducts)}>Add to Cart</button>
        </div>
      </div>
      <div className='d4d' style={{padding:'20px'}}>
        <label><strong>Description:</strong></label>
        <p>{selectedProducts.description}</p>
      </div>
    </div>
  )
}
export default SelectedProduct;
