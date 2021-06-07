const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
require("./config/mongoose.config");
// routes connection
// immediately invoked function execution
require("./routes/clothes.routes")(app);

app.listen(port, () => console.log(`listening on port ${port}`));
