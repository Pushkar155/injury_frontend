import React from 'react'
import "./navbar.scss";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
const Navbar = ({type}) => {
  const className=`navbar ${type}`;
  return (
    <>
      <div className={className}>
          {/* <div className="navbar_back">
              <ArrowBackRoundedIcon className='icon'/>
          </div> */}
          <div className="navbar_name">
              <HealthAndSafetyOutlinedIcon className='icon'/>
              <h3>Injury tracking system</h3>
          </div>
          <MenuOutlinedIcon className='icon'/>
      </div>

      {/* <div className={className}>
          <div className="navbar_back">
              <ArrowBackRoundedIcon className='icon'/>
          </div>
          <div className="navbar_name">
              <HealthAndSafetyOutlinedIcon className='icon'/>
              <h3>Injury tracking system</h3>
          </div>
          <MenuOutlinedIcon className='icon'/>
      </div> */}
    </>
  )
}

export default Navbar