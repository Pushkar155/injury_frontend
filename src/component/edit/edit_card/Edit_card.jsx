import React, { useState } from 'react';
import "./edit_card.scss";
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useAuth } from "../../../AuthContext";

const Edit_card = () => {
    const {id,data}= useAuth();
  const [injuries, setInjuries] = useState(data);

  const handleDelete = (index) => {
    const updatedInjuries = [...injuries];
    updatedInjuries.splice(index, 1);
    setInjuries(updatedInjuries);
  };

  const handleSave = () => {
    onSave(id, injuries); // This will call a function to save data to the database
  };

  const onSave = (id, updatedData) => {
    // Assuming you have an API endpoint to update the data
    const apiUrl = `https://injury-tracking-backend.vercel.app/api/user/updateData/${id}`; // Replace with your actual API endpoint
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: updatedData }), // Send the updated data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Data was successfully updated
        console.log('Data updated successfully');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };
  
  

  return (
    <div className='card1'>
      <div className="card_navbar">
        <div className="edit_nav_data">
          <ReportGmailerrorredRoundedIcon className='icon'/>
          <h4>Reported At</h4>
        </div>
        <p>12-3-2023</p>
      </div>
      <h5 className='h4'>Pushkar Chaubey</h5>
      <div className="injuries">
        <div className="header">
          <p>Injuries</p>
        </div>
        {injuries.map((injury, index) => (
          <div className="injuries_data1" key={index}>
            <div className="injury_name1">
              <PsychologyAltRoundedIcon className='icon'/>
              <p>{injury.name}</p>
            </div>
            <DeleteForeverRoundedIcon
              className='icon1'
              onClick={() => handleDelete(index)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Edit_card;
