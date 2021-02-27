import { minutesTodays } from './minutsToDay'

export function getDayleUserTime() {
 let totalUserTime = minutesTodays(localStorage.getItem("monday"));

 let arraytime = localStorage.getItem("weeks");
 console.log(arraytime);
 return totalUserTime;
}