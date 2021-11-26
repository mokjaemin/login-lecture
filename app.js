"use strict";

// 모듈
const express = require("express");
const app = express();


// 라우팅 - 페이지들 연결
const home = require("./routes/home");

// 앱 세팅
app.set("vies", "./vies");
app.set("view engine", "ejs");
app.use("/", home);

module.exports = app;