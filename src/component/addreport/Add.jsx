import React from 'react';
import "./add.scss";
import App1 from "../../Body";

const Add = () => {
  return (
    <div className='add'>
        <p>Please Provide Information About Injury So We Can Proceed !</p>
        <div className="add_inputs">
            <h6>Name</h6>
            <input type="text" />
            <h6>Time and Date Of Report</h6>
            <input type="date" />
        </div>
        <p className='red'>Please Provide Information About Injury In Your Body portion by This Given Map (You Have to Click The Portion Of Body Which You Are hurted !)</p>
        <App1/>
        <button>Report</button>
    </div>
  )
}

export default Add