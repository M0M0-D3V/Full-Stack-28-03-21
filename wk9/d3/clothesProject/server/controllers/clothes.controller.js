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
  getOne: (req, res) => {
    Clothes.findOne({ _id: req.params.idd })
      .then((clothing) => res.json(clothing))
      .catch((err) => res.status(400).json(err));
  },
  updateClothing: (req, res) => {
    Clothes.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((clothing) => res.json(clothing))
      .catch((err) => res.status(400).json(err));
  },
  deleteClothing: (req, res) => {
    Clothes.deleteOne({ _id: req.params.iddd })
      .then((clothing) => res.json(clothing))
      .catch((err) => res.status(400).json(err));
  },
};
