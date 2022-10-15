const csv = require("csv-parser");
const fs = require("fs");
const assert = require("assert");
// const { finished } = require('stream');

//file will be got from database
const uploaded_data = "static/one.csv";
const correct_data = "static/two.csv";

let file = async (filepath) => {
  var col_detail = [];

  // console.log("Inside file");
  let end = new Promise(function (resolve, reject) {
    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (row) => {

        // console.log("Row ", row);
        col_detail.push(row);
      })
      .on("error", () => {
        // handle error
        console.log("error");
        reject;
      })
      .on("end", () => {
        // handle end of CSV

        // console.log("Column detail: ", col_detail);
        resolve(col_detail);
      });
  });
  let res = await end;
  return res;
};

exports.score = async (req, res, next) => {
  try {
    // console.log("Trying");
    file(uploaded_data).then((res1) => {
      // confirm that the csv file has the required columns
      assert(
        Object.keys(res1[0]).includes("id" && "score"),
        "CSV files lacks either or both the id and score columns"
      );
      var correct = 0; // correct labels counter variable
      file(correct_data).then((res2) => {
        // console.log("Res2: ", res2);

        for (var i = 0; i < res2.length; i++) {
          // get instance id and score
          let id = res2[i].id;
          let score = res2[i].score;
          // get corresponding instance from uploaded data
          let incomingScore = res1.filter((x) => x.id === id)[0].score;

          // check if the scores are similar and update the correct counter variable
          if (score === incomingScore) {
            // console.log(id);
            // console.log(`incoming ${incomingScore}, score ${score}`);
            correct = correct + 1;
          }
        }
        var prediction = correct / res2.length;
        console.log("Result: ", prediction.toFixed(3));

        res.json({ prediction: prediction.toFixed(3) });
      });
    });
  }
  catch (err) {
    res.json({ err });
  }
};
