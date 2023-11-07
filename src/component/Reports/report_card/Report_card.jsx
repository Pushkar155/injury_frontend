// import {useState} from 'react'
import "./report_card.scss"
// import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../AuthContext";

const Report_card = ({name,date,id1,data}) => {

    const {setId,setData}=useAuth();

    const navigate = useNavigate();
    const handelclick=()=>{
        setId(id1)
        setData(data)
        console.log(data)
        // console.log(id);
        navigate("/edit")
    }

  return (
    <div className='card'>
        <div className="card__navbar">
            <div className="card_navbar_data">
                <ReportGmailerrorredRoundedIcon className='icon'/>
                <p>Reported At</p>
            </div>
            <h6>{date}</h6>
        </div>
        <div className="card__middle">
            <h4>{name}</h4>
            <button onClick={handelclick}>edit</button>

        </div>
        <div className="card__lower">
            <h4>Injury</h4>
            <div className="card__lower_data">
                <div className="injuries">
                    <PsychologyAltRoundedIcon className="icon"/>
                    <span>Head Injury</span>
                </div>
                <div className="injuries">
                    <PsychologyAltRoundedIcon className="icon"/>
                    <span>Head Injury</span>
                </div>
                <div className="injuries">
                    <PsychologyAltRoundedIcon className="icon"/>
                    <span>Head Injury</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Report_card