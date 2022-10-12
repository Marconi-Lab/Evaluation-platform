const csv = require('csv-parser');
const fs = require('fs');
const { finished } = require('stream');

//file will be got from database
const filepath = './exple.csv'

var nameS = [];

function file(filepath, nameS){
    

    fs.createReadStream(filepath)
        .on('error', () => {
            // handle error
            console.log('error');
        })

        .pipe(csv())
        .on('data', (row) => {
            // console.log(row);
            
            let str = `${row["BUYER NAME"]} bought ${row["CANDY PURCHASED"]} pieces of candy on ${row["PURCHASE DATE"]} and paid $${row["CASH PAID"]}.`;
            // console.log(str)
            let name = row['CANDY PURCHASED'];
            nameS.push(name);
            if (name != 'Mac') console.log(name);
            // console.log(nameS)

        })

        .on('end', () => {
            // handle end of CSV
            console.log('finished');
            // console.log(nameS);
            return finished;
        })
        // return nameS
}
// console.log(nameS)
file(filepath, nameS);