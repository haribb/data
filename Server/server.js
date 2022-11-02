const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookie = require("cookie-parser");
const router = require("./Router/userRouter");
// database configuration
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db is not connected");
  });
//middleware
app.use(express.json());
app.use(cors());
app.use(cookie());
app.use("/api", router);
// errorhandlers
app.use((err,req,res, next)=>{
    const status = err.status || 404;
    const message = err.message || "Custom error";
    res.status(status).json({
        status,
        message
    })
})

// server
app.listen(process.env.PORT, () => {
  try {
    console.log("server listening on", process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});
