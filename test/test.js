var expect = require('expect');
var df = require('../src/dataframe');

describe('A Series', function() {
    describe('Creating it', function () {
        it('it should accepts a hash', function () {
            var mySeries = df.Series({'a': 1, 'b': 2, 'c': 3});
            expect(mySeries.index).toEqual(['a', 'b', 'c']);
        });
        it('it should accepts a hash and index', function () {
            var mySeries = df.Series({'a': 1, 'b': 2, 'c': 3}, index = ['x', 'y', 'z']);
            expect(mySeries.index).toEqual(['x', 'y', 'z']);
        });
    });
});