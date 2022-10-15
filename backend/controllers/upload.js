const { score } = require("./comparison");


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
      let name = "static/" + avatar.name
      file.mv(name);

      //   TODO - Compute the score and update the evaluations document


      if (
        avatar.mimetype == "application/vnd.ms-excel" ||
        avatar.mimetype == "text/csv"
      )
        //send response
        res.send({
          status: true,
          message: "File is uploaded",
          data: {
            name: avatar.name,
            mimetype: avatar.mimetype,
            size: avatar.size,
          },
        });
      else {
        console.log("Please Upload CSV Format file");
        res.send({ msg: "Please Upload CSV Format file" });
        // return res.redirect("/");
      }
    }

    //import the evaluation schema and save the document while passing the team id and the project id plus the score
    evaluation = score()

    
  } catch (err) {
    res.status(500).send(err);
  }
};
