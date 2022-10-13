const csv = require('csv-parser');
const fs = require('fs');
// const { finished } = require('stream');

//file will be got from database
const uploaded_data = '../static/one.csv'
const correct_data = '../static/two.csv'

let file = async (filepath) => {
    var col_detail = [];
    let end = new Promise( function(resolve, reject){
        fs.createReadStream(filepath)
        .on('error', () => {
            // handle error
            console.log('error');
            reject
        })

        .pipe(csv())
        .on('data', (row) => {
            let mark = row.mark
            // let name = row['mark'];
            col_detail.push(mark);
        })

        .on('end', () => {
            // handle end of CSV
            resolve(col_detail)
        })
    })
    let res = await end
    return res
}


exports.score = async(req, res, next) => {
    
try {
    
file(uploaded_data).then(res1 => {
    
    var correct = 0
    var wrong = 0
    file(correct_data).then(res2 => {
        for (var i=0; i<res2.length; i++){
            if (res1[i] === res2[i]) correct=correct+1
                wrong=wrong+1
        }
        var score = correct/res2.length
        console.log(score.toFixed(3));
        // res.status(200).json({data: score.toFixed(3)})
    })
})

}
catch(err){res.json({err})}
}
