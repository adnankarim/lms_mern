const express = require('express');
require("dotenv").config({path:'./config.env'});
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const app= express();

// routes
const authRoutes = require("./routes/auth/auth");
const userRoutes = require("./routes/user/user"); 
const aboutRoutes = require("./routes/about/aboutRoutes"); 
const projectRoutes = require("./routes/project/projectRoutes"); 
const categoryRoutes = require("./routes/category/categoryRoutes"); 
const contactRoutes = require("./routes/contact/contactRoutes"); 


// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  // middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", aboutRoutes);
app.use("/api", projectRoutes);
app.use("/api", categoryRoutes);
app.use("/api", contactRoutes);
const port = process.env.PORT || 8000;

// DB
const DB = process.env.DATABASE_LOCAL;

if (process.env.NODE_ENV == "production"){
 const DB = process.env.MONGO_URI.replace('<PASSWORD>',process.env.PASSWORD);

}

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});


const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.listen(port,()=> console.log("listening 8000 port "));


