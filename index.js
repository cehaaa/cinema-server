const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from express");
});

// ANCHOR: Route list
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");

// ANCHOR: Use route
app.use("/users", userRouter);
app.use("/movies", movieRouter);

// ANCHOR: Serve movie banner
app.use("/storage", express.static("public"));

app.listen(3000);
