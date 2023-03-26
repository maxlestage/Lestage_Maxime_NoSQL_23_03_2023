// init express server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const config = require("./db/config");

// init routes
const userRoutes = require("./routes/userRoutes");
const sauceRoutes = require("./routes/sauceRoutes");

// Middleware Auth
const auth = require("./middlewares/auth");

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(routes);
app.use("/api/auth", userRoutes);
// app.use("/", auth, commonRoutes);
app.use("/api/sauces", auth, sauceRoutes);

// init server
app.listen(3000, () => {
	console.log("Server is running on port 0.0.0.0:3000");
});
