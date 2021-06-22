const jwtCreate = require('../helpers/jwtCreate');
// const validateToken = require('../helpers/validateToken');

const login = async (req, res) => {
    const { email } = req.body;

    const token = jwtCreate({ email });
    res.status(200).json({ token });
};

module.exports = {
    login,
};