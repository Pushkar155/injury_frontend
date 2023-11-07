import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import './body.scss';
// import Image from "./images/body.jpg";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * 16)];
  return color;
};

const App1 = () => {
  const [selectedAreaId, setSelectedAreaId] = useState([]);

  const mapperAreaClickHandler = async (item, idx, event) => {
    const currentSelectedAreaId = selectedAreaId;
    if (Array.isArray(currentSelectedAreaId)) {
      const indexInState = currentSelectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {
        console.log('Removing id', item.id);
        setSelectedAreaId([
          ...currentSelectedAreaId.slice(0, indexInState),
          ...currentSelectedAreaId.slice(indexInState + 1),
        ]);
      } else {
        alert(`Clicked Item Id: ${item.name}`);
        console.log('Setting Id', item.id);
        setSelectedAreaId([...currentSelectedAreaId, item.id]);
      }
    } else {
      if (item.id === currentSelectedAreaId) {
        setSelectedAreaId(null);
      } else {
        setSelectedAreaId(item.id);
      }
    }
  };


  
  const MAP = {
    name: 'my-map',
    areas: [
		{
		  id: '0',
		  name: 'Left Foot',
		  shape: 'rectangle',
		  coords: [80, 500, 110, 540],
		//   prefill: getRandomColor(),
		  fillColor: 'blue',
		},
		{
		  id: '1',
		  name: 'Right Foot',
		  shape: 'rectangle',
		  coords: [125, 500, 155, 540],
		  prefill: getRandomColor(),
		  fillColor: 'red',
		},
		{
		  id: '2',
		  name: 'Left Knee',
		  shape: 'rectangle',
		  coords: [80, 370, 110, 400],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '3',
		  name: 'Right Knee',
		  shape: 'rectangle',
		  coords: [125, 370, 155, 400],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '4',
		  name: 'Stomach',
		  shape: 'rectangle',
		  coords: [80, 165, 155, 240],
		  prefill: getRandomColor(),
		  lineWidth: 5,
            lineColor: "red",
		  fill: 'blue',
		},
		{
		  id: '5',
		  name: 'Left Hand',
		  shape: 'rectangle',
		  coords: [5, 250, 40, 315],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '6',
		  name: 'Right Hand',
		  shape: 'rectangle',
		  coords: [200, 250, 235, 315],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '7',
		  name: 'Face',
		  shape: 'rectangle',
		  coords: [90, 30, 145, 70],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '8',
		  name: 'Head',
		  shape: 'rectangle',
		  coords: [90, 0, 145, 30],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '9',
		  name: 'Left Arm',
		  shape: 'rectangle',
		  coords: [0, 165, 40, 250],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '10',
		  name: 'Right Arm',
		  shape: 'rectangle',
		  coords: [200, 165, 240, 250],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '11',
		  name: 'Chest',
		  shape: 'rectangle',
		  coords: [90, 70, 145, 165],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '12',
		  name: 'Neck',
		  shape: 'rectangle',
		  coords: [105, 0, 130, 30],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '13',
		  name: 'Left Thigh',
		  shape: 'rectangle',
		  coords: [80, 400, 110, 500],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '14',
		  name: 'Right Thigh',
		  shape: 'rectangle',
		  coords: [125, 400, 155, 500],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '15',
		  name: 'Left Elbow',
		  shape: 'rectangle',
		  coords: [0, 105, 40, 135],
		  prefill: getRandomColor(),
		  fill: 'blue',
		},
		{
		  id: '16',
		  name: 'Right Elbow',
		  shape: 'rectangle',
		  coords: [200, 105, 240, 135],
		  prefill: getRandomColor(),
		  lineWidth: 5,
            lineColor: "red",
		  fill: 'blue',
		},
	  ]
  };
  return (
    <div className='middle'>
      <ImageMapper
        src="https://raw.githubusercontent.com/msalo3/react-native-image-mapper/master/Examples/human.png"
        map={MAP}
        onClick={(item, idx, event) => mapperAreaClickHandler(item, idx, event)}
        active={selectedAreaId}
		// width={150}
		// height={300}
      />
    </div>
  );
};

export default App1;
