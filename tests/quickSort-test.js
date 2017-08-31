const { assert, expect, should } = require('chai');
const quickSort = require('../scripts/quickSort');
const { generateRandomPositiveArray, generateRandomNegativeArray, generateRandomAlphabetArray } = require( './generate-random-array' );

describe('Quick Sort', () => {

  let positiveTestCase = generateRandomPositiveArray( 9350 );
  let positiveTestCaseSorted = positiveTestCase.sort( (a, b) => a - b );

  let negativeTestCase = generateRandomNegativeArray( 9250 );
  let negativeTestCaseSorted = negativeTestCase.sort( (a, b) => a - b );

  let alphabetTestCase = generateRandomAlphabetArray( 9350 );
  let alphabetTestCaseSorted = alphabetTestCase.sort();

  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it ( 'should sort two items', () => {
    assert.deepEqual( quickSort( [ 5, 3 ] ), [ 3, 5 ] );
  } );

  it('should sort an array with duplicates', () => {
    assert.deepEqual(quickSort([5,5,4,3,2,1,1]), [1,1,2,3,4,5,5] );
  } );

  it( 'should sort a random array of 9,350 positive numbers', () => {
    assert.deepEqual( quickSort( positiveTestCase ), positiveTestCaseSorted );
  } ).timeout(5000);

  it( 'should sort a random array of 9,350 negative numbers', () => {
    assert.deepEqual( quickSort( negativeTestCase ), negativeTestCaseSorted );
  } ).timeout(5000);

  it( 'should sort a random array of 9,350 alphabet characters', () => {
    assert.deepEqual( quickSort( alphabetTestCase ), alphabetTestCaseSorted );
  } ).timeout(5000);

});
