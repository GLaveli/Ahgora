import React, { useEffect, useState } from 'react';

import './styles.css';

function UserPanel() {

 const [monday, setMonday] = useState(100);
 const [tuesday, setTuesday] = useState(200);
 const [wednessday, setWednesday] = useState(200);
 const [thursday, setThursday] = useState(200);
 const [friday, setFriday] = useState(200);
 const [saturnday, setSaturday] = useState(200);
 const [sunday, setSunday] = useState(200);

 const [weeks, setWeek] = useState({ segunda: 15, terca: 200, quarta: 45, quinta: 20, sexta: 10, sabado: 40, domingo: 60 });

 useEffect(() => {
  localStorage.setItem("weeks", weeks);
  localStorage.setItem("monday", monday);
  localStorage.setItem("tuesday", tuesday);
  localStorage.setItem("wednessday", wednessday);
  localStorage.setItem("thursday", thursday);
  localStorage.setItem("friday", friday);
  localStorage.setItem("saturnday", saturnday);
  localStorage.setItem("sunday", sunday);
 }, [monday, tuesday, wednessday, thursday, friday, saturnday, sunday, weeks]);

 return (
  <>
   <div className="panelContainer">
    <div className="inputBlock">
     <label htmlFor="Monday">Monday</label>
     <input type="number" value={monday} onChange={e => { setMonday(e.target.value) }} className="inputSettings" id="Monday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Tuesday">Tuesday</label>
     <input value={tuesday} onChange={e => { setTuesday(e.target.value) }} className="inputSettings" id="Tuesday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Wednesday">Wednesday</label>
     <input value={wednessday} onChange={e => { setWednesday(e.target.value) }} className="inputSettings" id="Wednesday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Thursday">Thursday</label>
     <input value={thursday} onChange={e => { setThursday(e.target.value) }} className="inputSettings" id="Thursday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Friday">Friday</label>
     <input value={friday} onChange={e => { setFriday(e.target.value) }} className="inputSettings" id="Friday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Saturday">Saturday</label>
     <input value={saturnday} onChange={e => { setSaturday(e.target.value) }} className="inputSettings" id="Saturday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
    <div className="inputBlock">
     <label htmlFor="Sunday">Sunday</label>
     <input value={sunday} onChange={e => { setSunday(e.target.value) }} className="inputSettings" id="Sunday" type="number" placeholder="200" />
     <label className="minutes">minutes</label>
    </div>
   </div>
  </>
 );
}

export default UserPanel;
