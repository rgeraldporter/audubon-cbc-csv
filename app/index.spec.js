'use strict';

var _index = require('./index');

var cbcCsv = _interopRequireWildcard(_index);

var _audubonCbcCsvParser = require('audubon-cbc-csv-parser');

var _audubonCbcCsvParser2 = _interopRequireDefault(_audubonCbcCsvParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('the cbc-csv function', function () {

    it('should make a csv string out of total count data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = cbcCsv.createCountCsv(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)","cw",6,0,5,1,3,3');
    });

    it('should make a csv string that is reversed out of total count data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = cbcCsv.createCountReverseCsv(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",3,3,1,5,0,6,"cw"');
    });

    it('should make a csv string out of per-hour data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = cbcCsv.createPerHourCsv(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",0,0.0309,0,0.0219,0.0051,0.0165,0.0167');
    });

    it('should make a csv string out of per-hour data', function () {

        // start with test data
        var countData = (0, _audubonCbcCsvParser2.default)('src/test.csv');
        var csv = cbcCsv.createPerHourReverseCsv(countData);
        var lines = csv.split('\n');
        var lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",0.0167,0.0165,0.0051,0.0219,0,0.0309,0');
    });
});