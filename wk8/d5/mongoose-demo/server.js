const express = require("express");
const app = express();
const port = 8000
    // import the mongodb
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
// immediately invoked function
require("./routes/city.routes")(app)
// above will do the same as below
// const AllMyUserRoutes = require("./routes/user.routes");
// AllMyUserRoutes(app);
    
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));