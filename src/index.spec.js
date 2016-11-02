import * as cbcCsv from './index';
import cbcParse from 'audubon-cbc-csv-parser';

describe('the cbc-csv function', () => {

    it('should make a csv string out of total count data', () => {

        // start with test data
        const countData = cbcParse('src/test.csv');
        const csv = cbcCsv.createCountCsv(countData);
        const lines = csv.split('\n');
        const lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)","cw",6,0,5,1,3,3');
    });

    it('should make a csv string that is reversed out of total count data', () => {

        // start with test data
        const countData = cbcParse('src/test.csv');
        const csv = cbcCsv.createCountReverseCsv(countData);
        const lines = csv.split('\n');
        const lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",3,3,1,5,0,6,"cw"');
    });

    it('should make a csv string out of per-hour data', () => {

        // start with test data
        const countData = cbcParse('src/test.csv');
        const csv = cbcCsv.createPerHourCsv(countData);
        const lines = csv.split('\n');
        const lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",0,0.0309,0,0.0219,0.0051,0.0165,0.0167');
    });

    it('should make a csv string out of per-hour data', () => {

        // start with test data
        const countData = cbcParse('src/test.csv');
        const csv = cbcCsv.createPerHourReverseCsv(countData);
        const lines = csv.split('\n');
        const lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)",0.0167,0.0165,0.0051,0.0219,0,0.0309,0');
    });
});