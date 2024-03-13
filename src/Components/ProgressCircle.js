import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({percentage,color}) => {
  
  return (
    <div>
        <CircularProgressbar value={percentage} styles={buildStyles({textColor: 'rgb(25,135,84)',pathColor: `${color}`})} text={`${percentage}%`} />
    </div>
               


              
           
      

)             }

export default ProgressCircle
