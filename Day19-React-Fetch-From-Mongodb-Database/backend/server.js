const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGOOSE_URI, { directConnection: true })
  .then(() => {
    console.log("Connected to database Successfully");
  })
  .catch((error) => console.error(error));

const schema = mongoose.Schema({
  name: String,
  age: Number,
  fullTime: Boolean,
});

const studentSchema = mongoose.model("students", schema);

app.get("/api/students", async (req, res) => {
  try {
    const students = await studentSchema.find();
    res.send(students);
  } catch (err) {
    console.error(err);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Listening at port ${PORT}`);
});
