import React from 'react'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import "./home.scss";
import {useNavigate} from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const handelclick2=()=>{
        navigate("/")
    }
    const handelclick1=()=>{
        navigate("/login")
    }
  return (
    <div className='Home'>
    <div className="home_navbar">
        <HealthAndSafetyOutlinedIcon className='icon'/>
        <h3>Injury tracking system</h3>
    </div>
    <div className="home__data">

        <div className="home_up">
            <h1>Hi !</h1>
            <h1>Welcome Back</h1>
            <p className='p re'>Let's create an account</p>

        </div>

        <div className="home_middle">

            <div className="home_inputs">
                <span>User Name</span>
                <input type="text" />
            </div>

            <div className="home_inputs">
                <span>Email</span>
                <input type="text" placeholder='abcd@gmail.com'/>
            </div>

            <div className="home_inputs">
                <span>Password</span>
                <input type="text" />
            </div>

            <div className="home_buttons">
                <button onClick={handelclick1}>Sign Up</button>
            </div>


        </div>

        <div className="home__down">
            <p>Have an account ?</p>
            <h6 onClick={handelclick2}>Log In</h6>
        </div>




    </div>

</div>
  )
}

export default Register