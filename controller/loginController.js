const User = require('../model/Users');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(401).json({ "message": "enter username and password" });

    const user = await User.findOne({ username: username }).exec();

    if (!user) return res.status(401).json({ "message": "user not found" });
}

module.exports = { handleLogin }