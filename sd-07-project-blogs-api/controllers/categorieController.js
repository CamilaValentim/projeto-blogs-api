const jwtCreate = require('../helpers/jwtCreate');
// const validateToken = require('../helpers/validateToken');
const { Categorie } = require('../models');

const getAll = async (req, res) => {
    const categories = await Categorie.findAll();
    res.status(200).json(categories);
};

const cadastro = async (req, res) => {
    const { name } = req.body;  
    const categoria = await Categorie.create({ name });

   jwtCreate({ name });
    res.status(201).json(categoria);
};

module.exports = {
    cadastro,
    getAll,
};