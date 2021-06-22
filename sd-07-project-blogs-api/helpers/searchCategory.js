const { Categorie } = require('../models');

const findCategory = async () => {
  const findList = await Categorie.findAll();
   return findList.map((categorie) => categorie.id);
};

const searchCategory = async (arrayId) => {
    const categoryIds = await findCategory();
    const result = arrayId.every((id) => categoryIds.includes(id));
    return result;
};

module.exports = searchCategory;
