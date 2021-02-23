
import { findMostRepeatedWord } from './findMostRepeatedWord';


export function joinWords(videoDetails) {
 let joinedWords = [];

 videoDetails.forEach(element => {
  joinedWords.push({
   'VideoDetails': element,
   "countedWords": findMostRepeatedWord(`${element.snippet.channelTitle} ${element.snippet.description}`)
  });
 });
 return joinedWords;
}
