const csv = require('csv-parser');
const fs = require('fs');
// const { finished } = require('stream');

//file will be got from database
const uploaded_data = './exple.csv'
const correct_data = './correct.csv'

let file = async (filepath) => {
    var nameS = [];
    let end = new Promise( function(resolve, reject){
        fs.createReadStream(filepath)
        .on('error', () => {
            // handle error
            console.log('error');
            reject
        })

        .pipe(csv())
        .on('data', (row) => {
            let name = row['CANDY PURCHASED'];
            nameS.push(name);
        })

        .on('end', () => {
            // handle end of CSV
            resolve(nameS)
        })
    })
    let res = await end
    return res
}
console.log("------yap")

exports.score = (req, res) => {
    
try {
    
file(uploaded_data).then(res => {
    
    var correct = 0
    var wrong = 0
    file(correct_data).then(res2 => {
        for (var i=0; i<res2.length; i++){
            if (res[i] === res2[i]) correct=correct+1
                wrong=wrong+1
        }
        var score = correct/res2.length
        console.log(score.toFixed(3));
        res.status(200).json({data: score.toFixed(3)})
    })
})

}
catch(err){res.json({err})}
}
