function generateRandomPositiveArray( n ) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push( Math.floor(Math.random() * n) )
  }

  return arr;
}

function generateRandomNegativeArray( n ) {
  let arr = [];

  for ( let i = 0; i < n; i++ ) {
    arr.push( Math.floor( Math.random() * -n ) )
  }

  return arr;
}

function generateRandomAlphabetArray( n ) {

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let arr = [];

  for ( let i = 0; i < 52; i++ ) {
    arr.push( alphabet[ Math.floor( Math.random() * 52 ) ] )
  }

  return arr;
}

module.exports = {generateRandomPositiveArray, generateRandomNegativeArray, generateRandomAlphabetArray};
