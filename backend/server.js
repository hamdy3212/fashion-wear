const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

const itemsRouter = require("./routes/items");
const usersRouter = require("./routes/users");
app.use("/items", itemsRouter);
app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
