const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.signup = async (req, res, next) => {
    try {
      const { teamName, password, role } = req.body;
      const hashedPassword = await hashPassword(password);
      const newUser = new User({
        teamName,
        password: hashedPassword,
        role: role || "researcher",
      });
      const accessToken = jwt.sign(
        { userId: newUser._id },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: 4000,
        }
      );
      newUser.accessToken = accessToken;
      await newUser.save();
      res.json({
        data: newUser,
        message: `You have registered successfully as ${newUser.role}`,
      });
    }
    catch (error) {
      res.json({msg: error})
    }
};

exports.login = async(req, res, next) => {
    try{
        const {teamName, password} = req.body;
        const user = await User.findOne({ teamName });
        if (!user) return res.json({msg: "No such Name, Please register"})

        const validPassword = await validatePassword(password, user.password);
        if (!validPassword) return res.json({msg: "Incorrect Password"})

        res.status(200).json({
            data: {Team: user.teamName},
            message: " You are welcome back"
        })
    }
    catch(err){res.json({msg: err})}
}

exports.isAdmin = async (req, res, next)=>{
  try{
    // const { teamName } = req.body;
    // const team = await User.findOne({teamName});
    // if (!team) return res.json({msg: "No such Team Name, Please register"})

    // if (team.role != "admin") throw new Error("Unauthorised, Only admins")
    // next();

    // find by the id....don't use the one above
    const { team_id } = req.body;
    const team = await User.findOne({ team_id })
    if (!team) return res.json({msg: "No such ID, Please register"})
    // if (team.role != "admin") throw new Error("Unauthorised, Only admins")
    next();


    //----------------------------------------------------------------------------
      // res.locals.loggedInUser = await User.findById({}) ///////////////ask this
      // const user = res.locals.loggedInUser;
      // if (user.role != "admin") throw new Error("Unauthorized, Only admins")
      // next();
  }
  catch (err) {
      res.status(401).json(
          {
              msg: `${err}`
          }
      )
  }
}

