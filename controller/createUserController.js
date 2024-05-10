const User = require("../model/Users");
const bcrypt = require('bcrypt');

const handleCreateUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.json({ "message": "username and password required" });

    // prevent duplicate
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) return res.status(409);

    try {
        const pwd = await bcrypt.hash(password, 10);

        const result = await User.create({
            "username": username,
            "password": pwd
        });

        console.log(result);
    } catch (error) {
        
    }
}

module.exports = { handleCreateUser }