import React from 'react'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import "./home.scss";
import {useNavigate} from "react-router-dom"

const Forget = () => {
    const navigate = useNavigate();
    const handelclick=()=>{
        navigate("/")
    }
    const handelclick1=()=>{
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
            <h1>Write</h1>
            <h1>New Password !</h1>
            {/* <p className='p re'>We Are waiting for you, please enter your details </p> */}

        </div>

        <div className="home_middle">

            <div className="home_inputs">
                <span>Password</span>
                <input type="password" />
            </div>


            <div className="home_buttons">
                <button onClick={handelclick}>Forget Password</button>
            </div>


        </div>

        <div className="home__down">
            <p>Don't have an account ?</p>
            <h6 onClick={handelclick1}>Sign Up</h6>
        </div>




    </div>

</div>
  )
}

export default Forget