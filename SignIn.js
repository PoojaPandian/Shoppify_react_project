import './SignIn.css';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faLock} from '@fortawesome/free-solid-svg-icons';

const SignIn = ({toggleSignupPage, onSignIn})=>{
    const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(user);
  }

    return(
        <div className="signin_div">
            <div className='signin_cont'>
                <h4>SignIn</h4>
                <form onSubmit={handleSubmit}>
                {/* <form> */}
                <div><label>UserName</label></div>
                <input type="text" name='username' value={user.username} onChange={handleInputChange}/>
                <div><label>Password</label></div>
                <input type="password" name='password' value={user.password} onChange={handleInputChange}/>
                <div></div><br/>
                <div><button type="submit" style={{border:'1px solid #F39F5A'}}>Submit</button></div>
                </form>
                <p style={{fontSize:'small'}}>__________New to Shoppify?__________</p>
                <div className='button1'>
                    <button onClick={toggleSignupPage}>SignUp</button>
                </div>
            </div>
            
        </div>
    )
}
export default SignIn;
