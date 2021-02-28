import { wait } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import { getDailyUserTime } from '../../utils/getDailyUserTime'

import './styles.css';

function UserPanel() {

 const [watchTime, setWatchTime] = useState({
  'Sunday': 35,
  'Monday': 0,
  'Tuesday': 10,
  'Wednesday': 15,
  'Thursday': 20,
  'Friday': 25,
  'Saturday': 30
 });

 useEffect(() => {
  console.log(watchTime);
 }, [watchTime])


 return (
  <>
   <div className="panelContainer">
    {Object.keys(watchTime).map((option) => (
     <div className="inputBlock">
      <label htmlFor={option}>{option}</label>
      <input value={watchTime[option]} onChange={({ target: { id, value } }) => setWatchTime({ ...watchTime, [id]: parseInt([value]) })} className="inputSettings" id={option} type="number" placeholder="200" />
      <label className="minutes">minutes</label>
     </div>
    ))
    }
   </div>
  </>
 );
}

export default UserPanel;
