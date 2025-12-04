/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) return '';

  let strGift = '';

  strGift += symbol.repeat(size) + '\n';

  for (let i = 0; i < size - 2; i++) {
    strGift += symbol + ' '.repeat(size - 2) + symbol + '\n';
  }
  
  strGift += symbol.repeat(size);

  return strGift;
}

// MAIN para probar la función
function main() {
  const g1 = drawGift(4, '*');
  console.log(g1);
  const g2 = drawGift(3, '#');
  console.log(g2);
  const g3 = drawGift(2, '-');
  console.log(g3);
  const g4 = drawGift(1, '+');
  console.log(g4);
}

main();