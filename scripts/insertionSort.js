function insertionSort(arr) {
  for ( let j = 0; j < arr.length; j++ ) {
    for ( let i = j - 1; i >= 0; i-- ) {
      if ( arr[i+1] < arr[i] ) {
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
