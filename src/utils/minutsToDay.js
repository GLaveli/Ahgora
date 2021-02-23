export function minutesTodays(time) {

 if (time <= 1440) {
  var hours = Math.floor(time / 60);
  var minutes = time % 60;

  if (hours < 1) {
   if (minutes % 2 !== 0) {
    return timeFix(minutes);
   }
   return timeFix(minutes);
  }

  return `${hours}:${timeFix(minutes)}`
 }

 var d = new Date();
 let today = new Date().toISOString().slice(0, 10)
 const date1 = d.setMinutes(time);
 const date2 = new Date(today);
 const diffTime = Math.abs(date2 - date1);
 const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

 if (diffDays === 1) {
  return (`${diffDays} day and ${timeFix(minutes)} to watch all videos`);
 }
 return (`${diffDays} days and ${timeFix(minutes)} to watch all videos`);
}

function timeFix(fixIt) {
 return fixIt.toFixed(2).toString().replace(".", ":");
}
