'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _audubonCbcCsvParser = require('audubon-cbc-csv-parser');

var _audubonCbcCsvParser2 = _interopRequireDefault(_audubonCbcCsvParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the cbc-csv function', function () {

    it('should make a csv string', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = (0, _index2.default)(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)","cw",6,0,5,1,3,3');
    });
});