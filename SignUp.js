import './SignUp.css';
import { useState } from 'react';


const SignUp = ({onSignUp})=>{
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
        alert('Passwords do not match.');
        } else {
        onSignUp(user);
        }
    }


    return(
        <div className="signup_div">
            <div className='signup_cont'>
                <h4>SignUp</h4>
                <form onSubmit={handleSubmit}>
                <div><label>UserName</label></div>
                <input type="text" name='username' value={user.username} onChange={handleInputChange}/>
                <div><label>Email Id</label></div>
                <input type="email" name='email' value={user.email} onChange={handleInputChange}/>
                <div><label>Password</label></div>
                <input type="password" name='password' value={user.password} onChange={handleInputChange}/>
                <div><label>Confirm Password</label></div>
                <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={handleInputChange}/>
                {/* <div style={{fontSize:'small'}}><input type='checkbox'/>Accept </div><br/> */}
                <div><button type='submit' style={{border:'1px solid #F39F5A'}}>Submit</button></div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
