# CSV Generator for Audubon CBC Data (audubon-cbc-csv)
####v0.1.0

A Node.js module for create CSVs with improved formatting for the [Audubon's Christmas Bird Count](http://netapp.audubon.org/CBCObservation/).

## Purpose

To make the Audubon CBC data more easily accessible by providing a JavaScript API more amenible to data analysis and interaction than the currently available CSV or XLS files.

## Setup

```
npm install audubon-cbc-csv
```

## Example Usage

```
// requires audubon-cbc-csv-parser
import cbcParse from 'audubon-cbc-csv-parser';
import cbcCsv from 'audubon-cbc-csv';

const countData = cbcParse('src/test.csv');
const csv = cbcCsv(countData);
```

## Additional Terms of Use

Please make note of [Audubon's Terms of Use for CBC Data](http://www.audubon.org/content/policy-regarding-use-christmas-bird-count-data) when downloading and using CBC data. It is not provided as true "Open Data" as there are conditions you must adhere to when making use of the data for non-personal use.

## Copyrights & Notices

The Christmas Bird Count (CBC) is a Registered Trademark of the National Audubon Society. CBC Data is provided by National Audubon Society and through the generous efforts of Bird Studies Canada and countless volunteers across the western hemisphere.

## License

The MIT License (MIT)

Copyright (c) 2016 Robert Gerald Porter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.