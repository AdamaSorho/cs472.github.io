"use strict";

const express = require("express");
const bookController = require("../controllors/bookController");

const router = express.Router();

router.get("/", bookController.findAll);
router.post("/", bookController.save);
router.get("/:bookId", bookController.findById);

module.exports = router;
