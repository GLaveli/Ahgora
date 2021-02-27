import { minutesTodays } from './minutsToDay'

export function getDayleUserTime() {
 let totalUserTime = minutesTodays(localStorage.getItem("monday"));
 return totalUserTime;
}