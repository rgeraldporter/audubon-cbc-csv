'use strict';

var _index = require('./index');

var _audubonCbcCsvParser = require('audubon-cbc-csv-parser');

var _audubonCbcCsvParser2 = _interopRequireDefault(_audubonCbcCsvParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the cbc-csv function', function () {

    it('should make a csv string out of total count data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = (0, _index.createCountCsv)(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)","cw",6,0,5,1,3,3');
    });

    it('should make a csv string out of per-hour data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = (0, _index.createPerHourCsv)(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",0,0.0309,0,0.0219,0.0051,0.0165,0.0167');
    });
});