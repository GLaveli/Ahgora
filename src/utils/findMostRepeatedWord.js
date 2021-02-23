module.exports = {
 findMostRepeatedWord(text) {

  let words = text.split(' ').map((word) => {
   return word.toLowerCase().replace(/[^\w\s]/gi, '');
  });

  let totalWords = [];

  for (let word in words) {
   if (totalWords[words[word]] === undefined) {
    totalWords[words[word]] = 0;
   }
   totalWords[words[word]]++;
  }

  let repeatedWords = [];

  for (let x in totalWords) {
   if (totalWords[x] > 1 && x.length > 2) {
    repeatedWords.push({
     word: x,
     repeat: totalWords[x]
    });
   }
  }

  if (repeatedWords.length === 0)
   return repeatedWords = false

  repeatedWords.sort(reorder);

  function reorder(a, b) {
   if (a.repeat > b.repeat)
    return -1;
   if (a.repeat < b.repeat)
    return 1;
   return 0;
  }

  return repeatedWords.slice(0, 5);
 }
}

