"use strict";

const express = require("express");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

app.use("/course", courseRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));
