import { minutesTodays } from './minutsToDay'

export function getDailyUserTime() {
 let totalWeekTime = 0;

 let timeByWeeks = JSON.parse(localStorage.getItem('weeks'));

 Object.values(timeByWeeks).map(element => {

  totalWeekTime += element;

  return element;
 });


 return minutesTodays(totalWeekTime);
}