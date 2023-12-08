const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user: newUsername, pwd } = req.body;
  //   const user = req.body.user;
  //   const pwd = req.body.pwd;

  if (!newUsername || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }
  const duplicate = usersDB.users.find(
    (person) => person.username === newUsername
  );
  if (duplicate) return res.sendStatus(409);
  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = { username: newUsername, password: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );

    res.status(201).json({ success: `New user ${newUsername} created!` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handleNewUser,
};
