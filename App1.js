import './App.css';
import { useState } from 'react';
import Header1 from './Header1';
import Product2 from './Product2';
import Cart from './Cart';
import SignUp from './SignUp';
import SignIn from './SignIn';



function App1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart,setCart]=useState([]);
  const [isCartOpen,setIsCartOpen]=useState(false);
  const [isSignUp,setIsSignUp]=useState(false);
  const [isSignIn,setIsSignIn]=useState(false);
  const [users, setUsers] = useState([]);
  const [signedInUser, setSignedInUser] = useState([]);



  const handleAddProduct = (product) => {

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  console.log(cart)


  const handleRemoveProduct = (product) => {
    const updatedCart = cart.find((item) => item.id === product.id);
    if (updatedCart.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
      )
    }
  }

  const toggleCartPage =()=>{
    setIsCartOpen(!isCartOpen);
  }

  const toggleSignupPage =()=>{
    setIsSignUp(!isSignUp)
  }

  const toggleSigninPage =()=>{
    setIsSignIn(!isSignIn)
  }



  const handleSignUp = (user) => {
    
    const existingUser = users.find((u) => u.username === user.username);
    if (existingUser) {
      alert('User already exists. Please sign in.');
      return;
    }

    
    setUsers([...users, user]);
    alert('Registration successful. Please sign in.');
    setIsSignUp(false);
  }

  const handleSignIn = (user) => {
    const existingUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (existingUser) {
      alert('Sign-in successful.');
      setSignedInUser(existingUser); 
      setIsSignIn(false);
      
    } else {
      alert('Invalid username or password. Please sign up or try again.');
    }
  }

  const toggleSignoutPage = () => {
    setSignedInUser(null);
  };

  
  return (
    <>
      <div>
        
      {signedInUser ? ( 
          <Header1
            setSearchTerm={setSearchTerm}
            cart={cart}
            toggleCartPage={toggleCartPage}
            toggleSignoutPage={toggleSignoutPage}
            signedInUser={signedInUser}

          />
        ) : (
          <Header1
            setSearchTerm={setSearchTerm}
            cart={cart}
            toggleCartPage={toggleCartPage}
            toggleSigninPage={toggleSigninPage}
          />
        )}  
        
        
        
        {isSignUp ? (
          <div>
            <div><SignUp onSignUp={handleSignUp}/></div>
          </div>
        ): isSignIn ? ( 
        <SignIn toggleSignupPage={toggleSignupPage} onSignIn={handleSignIn}/> 
        ) :
        (isCartOpen ? (
          <Cart cart={cart} setCart={setCart}
          handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
        ) : (
          <>
          <Product2 searchTerm={searchTerm} handleAddProduct={handleAddProduct} />
          </>
        )
        )}
      
      </div>
    </>
  );
}

export default App1;