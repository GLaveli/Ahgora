import React, { useEffect, useState } from 'react';

import { getDailyUserTime } from '../../utils/getDailyUserTime'

import './styles.css';

function UserPanel() {

 const [watchTime, setWatchTime] = useState({
  'Sunday': 15,
  'Monday': 120,
  'Tuesday': 30,
  'Wednesday': 150,
  'Thursday': 20,
  'Friday': 40,
  'Saturday': 390
 });

 useEffect(() => {
  localStorage.clear();
  localStorage.setItem('weeks', JSON.stringify(watchTime));
  getDailyUserTime()
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
