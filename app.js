const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const { connect } = require("mongoose");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");
dotenv.config();
connectToDB();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
