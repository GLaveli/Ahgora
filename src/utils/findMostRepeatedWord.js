module.exports = {
 findMostRepeatedWord(text) {
  let words = text.match(/\w+/g);

  console.log(contaRepetidas(text))

  function contaRepetidas(frase) {
   let fraseArray = frase.split(' ').map((palavra) => {
    return palavra.toLowerCase().replace(/[^\w\s]/gi, '');
   });

   let totalPalavras = [];

   for (let x in fraseArray) {
    if (totalPalavras[fraseArray[x]] === undefined) {
     totalPalavras[fraseArray[x]] = 0;
    }
    totalPalavras[fraseArray[x]]++;
   }

   let palavrasRepetidas = [];

   for (let x in totalPalavras) {
    if (totalPalavras[x] > 1) {
     palavrasRepetidas.push({
      word: x,
      repeat: totalPalavras[x]
     });
    }
   }

   palavrasRepetidas.sort(compare);

   function compare(a, b) {
    if (a.repeat > b.repeat)
     return -1;
    if (a.repeat < b.repeat)
     return 1;
    return 0;
   }



   return palavrasRepetidas.slice(0, 5);
  }


  // let keywords = {}

  // words.forEach(word => {
  //  word = word.toLowerCase()
  //  if (keywords.hasOwnProperty(word)) {
  //   return keywords[word] += 1
  //  }
  //  keywords[word] = 1
  // })

  // let keys = Object.keys(keywords)

  // for (let i = 0; i < 5; i++) {
  //  let r = keys.reduce((a, b) => {
  //   return keywords[a] > keywords[b] ? a : b;
  //  })
  //  keys.splice(keys.indexOf(r), 1)
  //  this.topKeywords += ` ${r},`
  // }


 }
}

