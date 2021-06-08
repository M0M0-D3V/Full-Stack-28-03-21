const ClothesController = require("../controllers/clothes.controller");
const { Clothes } = require("../models/clothes.model");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/api/clothes", ClothesController.createClothing);
  // Read
  // Get All
  app.get("/api/clothes", ClothesController.getAll);
  // Get One
  app.get("/api/clothes/:idd", ClothesController.getOne);
  // Update
  app.put("/api/clothes/:id", ClothesController.updateClothing);
  // Delete
  app.delete("/api/clothes/:iddd", ClothesController.deleteClothing);
};
