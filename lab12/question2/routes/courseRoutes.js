"use strict";

const express = require("express");
const Course = require("../models/course");

const courseRoutes = express.Router();

courseRoutes.get("/", (req, res) => {
  const courses = Course.getAll();

  res.status(200).json(courses);
});

courseRoutes.post("/", (req, res) => {
  let course = new Course(req.body.id, req.body.name);
  course = course.save();
  if (course === -1)
    res
      .status(409)
      .json({ message: "Course already exists!", statusCode: 409 });
  else res.status(201).json(course);
});

courseRoutes.put("/", (req, res) => {
  const newCourse = new Course(req.body.id, req.body.name);
  const course = newCourse.edit();
  if (course === -1)
    res
      .status(404)
      .json({ message: "Cannot modify unexisted course!", statusCode: 404 });
  else res.status(200).json(course);
});

courseRoutes.get("/:id", (req, res) => {
  const course = Course.findById(req.params.id);

  if (course === undefined)
    res
      .status(404)
      .json({ message: "Course cannot be found!", statusCode: 404 });
  else res.status(200).json(course);
});

courseRoutes.delete("/:id", (req, res) => {
  const course = Course.deleteById(req.params.id);

  if (course === -1)
    res
      .status(404)
      .json({ message: "Cannot delete unexisted course!", statusCode: 404 });
  else res.status(200).json(course);
});

module.exports = courseRoutes;
