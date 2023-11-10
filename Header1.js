import React from 'react';
import './Header1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShopify} from '@fortawesome/free-brands-svg-icons';
import {faOpencart} from '@fortawesome/free-brands-svg-icons';

const Header1 = ({setSearchTerm, cart, signedInUser, toggleCartPage, toggleSignoutPage, toggleSigninPage}) => {

  

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  

  return (
    <>
    <header id='header'>
      <nav>
        <div><FontAwesomeIcon icon={faShopify} style={{height:'90%',color:'#F39F5A'}} />
        <label className='label'>Shoppify</label></div>
        <div>
          <input type="text" placeholder="Search for products" onChange={handleChange} />
        </div>
        <div className='button'>
          
        {signedInUser ? (
              <div style={{fontFamily:'cursive', color:'#F39F5A'}}>{signedInUser.username}</div> 
            ) : (
              <div>
                <button onClick={toggleSigninPage}>SignIn</button>
              </div>
            )}
            {signedInUser && (
              <div>
                <button onClick={toggleSignoutPage}>Sign Out</button> 
              </div>
            )}
        <div onClick={toggleCartPage}><FontAwesomeIcon icon={faOpencart} style={{height:'90%', color:'#F39F5A'}}/>
        {/* <span style={{color:'white'}}>{cart.length}</span> */}
        </div>
        </div>
      </nav>
      
    </header>
    </>
 
  );
};

export default Header1;
