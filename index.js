const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/UsersRoutes");

const app = express();

mongoose
  .connect("mongodb+srv://KrishnamRaja:admin@cluster.eucnt.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Get Method");
// });

app.use("/user", userRoutes);

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server Running On http://localhost:${PORT}`);
});