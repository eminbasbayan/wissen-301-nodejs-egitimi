const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user: newUsername, pwd } = req.body;
  //   const user = req.body.user;
  //   const pwd = req.body.pwd;

  if (!newUsername || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  const foundUser = usersDB.users.find(
    (person) => person.username === newUsername
  );
  if (!foundUser) return res.sendStatus(401); // Unauthorized
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // create JWT
    res.status(200).json({ success: `user ${newUsername} is login in!` });
  } 
  res.sendStatus(401);
}; 

module.exports = {
  handleLogin,
};
