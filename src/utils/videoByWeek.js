import { convertISO } from './convertISO';

export function videoByWeek(videoList) {

 let weeks = JSON.parse(localStorage.getItem('weeks'));
 let timeMarker = 0;
 let returnVideoByWeek = [];

 Object.keys(weeks).forEach((week) => {
  timeMarker = 0;
  for (let position in videoList) {
   let videoDuration = convertISO(videoList[position].contentDetails.duration);
   if ((timeMarker + videoDuration) <= weeks[week]) {
    timeMarker += videoDuration;
    if (returnVideoByWeek[week] === undefined) {
     returnVideoByWeek[week] = [];
    }
    returnVideoByWeek[week].push(videoList[position]);
    videoList.splice(position, 1);
   }
   if (timeMarker === weeks[week]) {
    break;
   }
  }
 });

 return returnVideoByWeek;
}