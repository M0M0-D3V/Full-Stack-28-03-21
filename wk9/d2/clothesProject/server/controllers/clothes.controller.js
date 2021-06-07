// const Clothes = require("../models/clothes.model");
const { Clothes } = require("../models/clothes.model");

// controller is like the views.py in Django

// module.exports.create = () => {

// }

// module.exports.getAll = () => {

// }

// module.exports.getOne = () => {

// }

// module.exports.updateOne = () => {

// }

// req is shorthand for request
// res is shorthand for response
module.exports = {
  createClothing: (req, res) => {
    Clothes.create(req.body).then((clothing) => {
      console.log("you have successfully created a thing");
      res.json(clothing).catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
    });
  },
  getAll: (req, res) => {
    Clothes.find({})
      .then((clothes) => res.json(clothes))
      .catch((err) => res.status(400).json(err));
  },
};
