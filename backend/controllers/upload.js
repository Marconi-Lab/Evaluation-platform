// const { score } = require("./comparison");
const score = require("./comparison")
const evalProject = require("../model/evaluate")

exports.upload = async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field to retrieve the uploaded file
      let file = req.files.csvFile;

      
      //Use the mv() method to place the file in the static directory
      let name = "static/" + file.name
      file.mv(name);
      

      if (
        file.mimetype == "application/vnd.ms-excel" ||
        file.mimetype == "text/csv"
      )
        console.log(file.size);
        //send response
        // res.send({
        //   status: true,
        //   message: "File is uploaded",
        //   data: {
        //     name: file.name,
        //     mimetype: file.mimetype,
        //     size: file.size,
        //   },
        // });
      else {
        console.log("Please Upload CSV Format file");
        return res.send({ msg: "Please Upload CSV Format file" });
      }

      //import the evaluation schema and save the document while passing the team id and the project id plus the score
    // const evaluation = score(name)
    //will sort
    
    console.log(score.prediction)
    // res.status(200).json({ prediction: score.prediction });
    // after the score is got it goes to the 
    const newEvaluation = new evalProject({
      team_id,
      project_id,
      score: score.prediction
    });
    console.log("-------------")
    await newEvaluation.save();
    res.json({
      data: newEvaluation,
      msg: "successfull"
    })

    }
  } catch (err) {
    res.status(500).send(err);
  }
};
