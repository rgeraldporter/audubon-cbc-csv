'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _csv = require('./lib/csv');

var _csv2 = _interopRequireDefault(_csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mergeDedupe(arr) {
    var _ref;

    return [].concat(_toConsumableArray(new Set((_ref = []).concat.apply(_ref, _toConsumableArray(arr)))));
}

function createCsv(val) {

    var species = val.species;
    var years = Object.keys(species).sort();
    var csvArr = [];
    var taxa = [];

    csvArr.push(['Species'].concat(years));

    years.forEach(function (year) {

        var yearTaxa = Object.keys(species[year]);

        taxa = mergeDedupe([taxa, yearTaxa]);
    });

    taxa.forEach(function (val) {

        var name = val;
        var row = [name];

        years.forEach(function (year) {

            species[year][name] ? row.push(species[year][name].count.emit()) : row.push(null);
        });

        csvArr.push(row);
    });

    return (0, _csv2.default)(csvArr).split('\n').slice(1).join('\n');
}

exports.default = createCsv;