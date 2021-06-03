const CityController = require("../controllers/city.controller")

// LEADING SLASH REQUIRED!
// export a function to be called and passed the app
module.exports = (app) => {
  // in Django: path("api/cities", views.allCities)
  app.post("/api/cities", CityController.create)
  app.get("/api/cities", CityController.read)
}