import React from 'react'
import './edit.scss';
// import Navbar from '../Navbar/Navbar';
import Edit_card from './edit_card/Edit_card';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { useAuth } from "../../AuthContext";

const Edit = () => {
  const {id,data}= useAuth();
  return (
    <div className='edit'>
        <div className="edit_navbar">
          {/* <div className={className}> */}
          <div className="navbar_back">
              <ArrowBackRoundedIcon className='icon'/>
          </div>
          <div className="navbar_name">
              <HealthAndSafetyOutlinedIcon className='icon'/>
              <h3>Injury tracking system</h3>
          </div>
          <MenuOutlinedIcon className='icon'/>
      {/* </div> */}
        </div>

        <div className="edit_body">
            <Edit_card id={id} data={data}/>
        </div>
    </div>
  )
}

export default Edit