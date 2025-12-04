function filterGifts(gifts) {
  // Code here
  const filtered = [];

  for (let i = 0; i < gifts.length; i++)
  {
    let hash = false;
    for (let j = 0; j < gifts[i].length; j++){
      if (gifts[i][j] === '#'){
        hash = true;
        break;
      }
    }
    if (!hash)
      filtered.push(gifts[i]);
  }
  return filtered;
}

function main() {
  const gifts1 = ['car', 'doll#arm', 'ball', '#train'];
  const good1 = filterGifts(gifts1);
  console.log(good1); // ['car', 'ball']

  const gifts2 = ['#broken', '#rusty'];
  const good2 = filterGifts(gifts2);
  console.log(good2); // []

  const gifts3 = [];
  const good3 = filterGifts(gifts3);
  console.log(good3); // []
}

main();