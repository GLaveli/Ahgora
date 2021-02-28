export function removeLongestVideos(videoList) {

 let moonday = localStorage.getItem("monday");

 console.log(moonday);
 let newList = [];

 videoList.forEach(element => {


  newList.push(element)

  console.log(element);
 });

 return videoList;

}