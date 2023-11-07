import React from 'react'
import "./home.scss"
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handelclick=()=>{
        navigate("/login")
    }
    // const navigate = useNavigate();
    const handelclick1=()=>{
        navigate("/forget")
    }
    const handelclick2=()=>{
        navigate("/register")
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
                <p className='p lo'>We Are waiting for you, please enter your details </p>

            </div>

            <div className="home_middle">
                <div className="home_inputs">
                    <span>Email</span>
                    <input type="text" placeholder='abcd@gmail.com'/>
                </div>

                <div className="home_inputs">
                    <span>Password</span>
                    <input type="password" />
                </div>
                <div className="home_forget">
                    <p onClick={handelclick1}>Forget Password ?</p>
                </div>

                <div className="home_buttons">
                    <button onClick={handelclick}>Log In</button>
                </div>


            </div>

            <div className="home__down">
                <p>Don't have an account ?</p>
                <h6 onClick={handelclick2}>Sign Up</h6>
            </div>




        </div>

    </div>
  )
}

export default Home