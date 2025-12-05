const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);

// Routes
app.get("/", (req, res) => {
  res.render("index", { users: [] });
});
// create 
app.post("/create", async (req, res) => {
    const { name, email } = req.body;
    await User.create({ name, email
    });
    res.send("User Created!");
});
 // updation 

app.post("/update", async (req, res) => {
    const { id, name, email } = req.body;
    await User.findByIdAndUpdate(id, { name, email });
    res.send("User Updated!");
});
// deletion 
app.post("/delete", async (req, res) => {
    const { id } = req.body;
    await User.findByIdAndDelete(id);
    res.send("User Deleted!");
});

app.post("/action", async (req, res) => {
  const { name, email, action } = req.body;

  if (action === "add") {
    // Add data
    await User.create({ name, email });
    return res.send("✔ Data Added!");
  } else if (action === "show") {
    // Show data
    const users = await User.find();
    return res.render("index", { users });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
