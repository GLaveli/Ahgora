import { convertISO } from './convertISO';

export function videoByWeek(videoList) {

 let weeks = JSON.parse(localStorage.getItem('weeks'));
 let timeMarker = 0;
 let videoReturnByWeek = [];

 Object.keys(weeks).forEach((week) => {
  timeMarker = 0;
  for (let posicaoAtualVideoList in videoList) {
   let tempoVideoAtual = convertISO(videoList[posicaoAtualVideoList].contentDetails.duration);
   if ((timeMarker + tempoVideoAtual) <= weeks[week]) {
    timeMarker += tempoVideoAtual;
    if (videoReturnByWeek[week] === undefined) {
     videoReturnByWeek[week] = [];
    }
    videoReturnByWeek[week].push(videoList[posicaoAtualVideoList]);
    videoList.splice(posicaoAtualVideoList, 1);
   }
   if (timeMarker === weeks[week]) {
    break;
   }
  }
 });

 return videoReturnByWeek;
}