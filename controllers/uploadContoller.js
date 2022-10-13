
exports.upload = async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;
            
            //Use the mv() method to place the file in the static directory
            avatar.mv('../static/' + avatar.name);
            
            if(avatar.mimetype == "application/vnd.ms-excel" || avatar.mimetype == "text/csv")
            //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            else{
                console.log("Please Upload CSV Format file");
                res.send({msg: "Please Upload CSV Format file"})
                // return res.redirect("/");
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
};