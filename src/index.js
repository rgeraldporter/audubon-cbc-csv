import toCsv from './lib/csv';

function mergeDedupe(arr) {

    return [...new Set([].concat(...arr))];
}

function createCsv(val) {

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

export {createCsv as default};
