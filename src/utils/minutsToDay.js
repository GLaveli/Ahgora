module.exports = {
 minutesTodays(minuts) {
  if (minuts < 1440) {
   return
  }

  var d = new Date();
  let today = new Date().toISOString().slice(0, 10)
  const date1 = d.setMinutes(minuts)
  const date2 = new Date(today);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(diffDays + " days");

  console.log(d);
 }
}