const ClothesController = require("../controllers/clothes.controller");
// routes is similar to urls.py
module.exports = (app) => {
  // different routes for the endpoints to match Controller
  // Create
  app.post("/api/clothes", ClothesController.createClothing);
  // Read
  // Get All
  app.get("/api/clothes", ClothesController.getAll)
  // Get One
  // app.get("/api/clothes/:id", ClothesController.)
  // Update
  // Delete
};
