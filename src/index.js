import toCsv from './lib/csv';

function mergeDedupe(arr) {

    return [...new Set([].concat(...arr))];
}

function createCountReverseCsv(val) {

    const species = val.species;
    const years = Object.keys(species).sort().reverse();
    const csvArr = [];
    let taxa = [];

    csvArr.push(['Species'].concat(years));

    years.forEach(year => {

        const yearTaxa = Object.keys(species[year]);

        taxa = mergeDedupe([taxa, yearTaxa]);
    });

    taxa.forEach(val => {

        const name = val;
        const row = [name];

        years.forEach(year => {

            species[year][name] ? row.push(species[year][name].count.emit()) : row.push(null);
        });

        csvArr.push(row);
    });

    return toCsv(csvArr).split('\n').slice(1).join('\n');
}

function createCountCsv(val) {

    const species = val.species;
    const years = Object.keys(species).sort();
    const csvArr = [];
    let taxa = [];

    csvArr.push(['Species'].concat(years));

    years.forEach(year => {

        const yearTaxa = Object.keys(species[year]);

        taxa = mergeDedupe([taxa, yearTaxa]);
    });

    taxa.forEach(val => {

        const name = val;
        const row = [name];

        years.forEach(year => {

            species[year][name] ? row.push(species[year][name].count.emit()) : row.push(null);
        });

        csvArr.push(row);
    });

    return toCsv(csvArr).split('\n').slice(1).join('\n');
}

function createPerHourReverseCsv(val) {

    const species = val.species;
    const years = Object.keys(species).sort().reverse();
    const csvArr = [];
    let taxa = [];

    csvArr.push(['Species'].concat(years));

    years.forEach(year => {

        const yearTaxa = Object.keys(species[year]);

        taxa = mergeDedupe([taxa, yearTaxa]);
    });

    taxa.forEach(val => {

        const name = val;
        const row = [name];

        years.forEach(year => {

            species[year][name] ? row.push(species[year][name].perHour.emit()) : row.push(null);
        });

        csvArr.push(row);
    });

    return toCsv(csvArr).split('\n').slice(1).join('\n');
}

function createPerHourCsv(val) {

    const species = val.species;
    const years = Object.keys(species).sort();
    const csvArr = [];
    let taxa = [];

    csvArr.push(['Species'].concat(years));

    years.forEach(year => {

        const yearTaxa = Object.keys(species[year]);

        taxa = mergeDedupe([taxa, yearTaxa]);
    });

    taxa.forEach(val => {

        const name = val;
        const row = [name];

        years.forEach(year => {

            species[year][name] ? row.push(species[year][name].perHour.emit()) : row.push(null);
        });

        csvArr.push(row);
    });

    return toCsv(csvArr).split('\n').slice(1).join('\n');
}

export {createCountCsv, createPerHourCsv, createCountReverseCsv, createPerHourReverseCsv};
