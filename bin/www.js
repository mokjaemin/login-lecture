"use strict";

const app = require("../app");
const port = 3000;

app.listen(port, (req, res) => {
    console.log('서버가동');
})