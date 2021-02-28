import { minutesTodays } from './minutsToDay'

export function getDailyUserTime() {
 let totalWeekTime = 0;

 let monday = localStorage.getItem("monday");
 let tuesday = localStorage.getItem("tuesday");
 let wednessday = localStorage.getItem("wednessday");
 let thursday = localStorage.getItem("thursday");
 let friday = localStorage.getItem("friday");
 let saturnday = localStorage.getItem("saturnday");
 let sunday = localStorage.getItem("sunday");

 totalWeekTime = (
  parseInt(monday)
  + parseInt(tuesday)
  + parseInt(wednessday)
  + parseInt(thursday)
  + parseInt(friday)
  + parseInt(saturnday)
  + parseInt(sunday)
 );


 return minutesTodays(totalWeekTime);
}