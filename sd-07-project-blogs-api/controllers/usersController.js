// const { validationResult } = require('express-validator');
const jwtCreate = require('../helpers/jwtCreate');
// const validateToken = require('../helpers/validateToken');
const { User } = require('../models');

const getAll = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const users = await User.findByPk(id);

    if (!users) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(users);
};

const create = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    await User.create({ displayName, email, password, image });

    const token = jwtCreate({ email });
    res.status(201).json({ token });
};

const deleteUser = async (req, res) => {
  const { emailUser } = res.locals;
  
  const destroyUser = await User.destroy({ 
      where: {
       email: emailUser, 
      },
   
    });
    res.status(204).json(destroyUser);
};

module.exports = {
    create,
    getAll,
    getById,
    deleteUser,
};