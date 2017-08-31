const { assert, expect, should } = require('chai');
const insertionSort = require('../scripts/insertionSort');
const { generateRandomPositiveArray, generateRandomNegativeArray, generateRandomAlphabetArray } = require( './generate-random-array' );
describe('Insertion Sort', () => {

  let positiveTestCase = generateRandomPositiveArray( 10000 );
  let positiveTestCaseSorted = positiveTestCase.sort( (a, b) => a - b );

  let negativeTestCase = generateRandomNegativeArray( 10000 );
  let negativeTestCaseSorted = negativeTestCase.sort( (a, b) => a - b );

  let alphabetTestCase = generateRandomAlphabetArray( 10000 );
  let alphabetTestCaseSorted = alphabetTestCase.sort();

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it( 'should sort two items', () => {
    assert.deepEqual( insertionSort([5,3]), [3,5] );
  } );

  it('should sort an array with duplicates', () => {
    assert.deepEqual(insertionSort([5,5,4,3,2,1,1]), [1,1,2,3,4,5,5] );
  } );

  it( 'should sort a random array of 10,000 positive numbers', () => {
    assert.deepEqual( insertionSort( positiveTestCase ), positiveTestCaseSorted );
  } ).timeout(5000);

  it( 'should sort a random array of 10,000 negative numbers', () => {
    assert.deepEqual( insertionSort( negativeTestCase ), negativeTestCaseSorted );
  } ).timeout(5000);

  it( 'should sort a random array of 10,000 alphabet characters', () => {
    assert.deepEqual( insertionSort( alphabetTestCase ), alphabetTestCaseSorted );
  } ).timeout(5000);


});
