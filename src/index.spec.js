import cbcCsv from './index';
import cbcParse from 'audubon-cbc-csv-parser';

describe('the cbc-csv function', () => {

    it('should make a csv string', () => {

        // start with test data
        const countData = cbcParse('src/test.csv');
        const csv = cbcCsv(countData);
        const lines = csv.split('\n');
        const lastLine = lines[lines.length - 1];

        expect(lastLine).toBe('"Yellow-rumped Warbler (Myrtle)","cw",6,0,5,1,3,3');
    });
});