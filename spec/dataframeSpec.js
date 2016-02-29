var assert = require('assert');
var df = require('../src/dataframe');

describe("A Series", function() {
  it("accepts a hash", function() {
    var mySeries = df.Series({'a': 1, 'b': 2, 'c': 3});
    expect(mySeries.index).toEqual(['a', 'b', 'c']);
  });
  it("accepts a hash and index", function() {
    var mySeries = df.Series({'a': 1, 'b': 2, 'c': 3}, index = ['x', 'y', 'z']);
    expect(mySeries.index).toEqual(['x', 'y', 'z']);
  });
});

console.log(df.version);