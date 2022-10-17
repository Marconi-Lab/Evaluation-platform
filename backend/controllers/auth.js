const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Project = require("../model/project");

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
    const newTeam = new User({
      teamName,
      password: hashedPassword,
      role: role || "researcher",
    });

    const accessToken = jwt.sign(
      { teamId: newTeam._id },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "3h",
      }
    );
    newTeam.accessToken = accessToken;
    await newTeam.save();
    res.json({
      data: newTeam,
      message: `You have registered successfully as ${newTeam.role}`,
    });
  }
  catch (error) {
    res.json({ msg: error })
  }
};

exports.login = async (req, res, next) => {
  try {
    const { teamName, password } = req.body;
    const user = await User.findOne({ teamName });
    if (!user) return res.json({ msg: "No such Name, Please register" })

    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) return res.json({ msg: "Incorrect Password" })

    res.status(200).json({
      data: { Team: user.teamName },
      message: " You are welcome back"
    })
  }
  catch (err) { res.json({ msg: err }) }
}

exports.token = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication Failed");
    }
    const { teamId, exp } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //Check if token has expired
    if (exp < Date.now().valueOf() / 1000) {
      return res
        .status(401)
        .json({ error: "JWT has expired, please login to obtain a new one" });
    }
    next();
  } catch (err) {
    res.status(401).json({
      msg: err,
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const { team_id } = req.body;
    const team = await User.findOne({ team_id })    //ask question here 
    if (team.role != "admin") throw new Error("Unauthorised, Only admins")
    next();
  }
  catch (err) {
    res.status(401).json(
      {
        msg: `${err}`
      }
    )
  }
}

