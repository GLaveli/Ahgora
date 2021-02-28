import { findMostRepeatedWord } from './findMostRepeatedWord';

export function joinWords(videoDetails) {
 let joinedWords = [];

 Object.values(videoDetails).forEach(element => {
  for (let i = 0; i < element.length; i++) {
   joinedWords.push({
    'VideoDetails': element[i],
    "countedWords": findMostRepeatedWord(`${element[i].snippet.channelTitle} ${element[i].snippet.description}`)
   });
  }
 });



 return joinedWords;
}
