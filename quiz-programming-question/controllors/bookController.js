"use strict";

const Author = require("../models/Author");
const Book = require("../models/Book");

exports.findAll = (req, res) => {
  if (req.query.firstname) {
    console.log(req.query.firstname);
    res.status(200).json(Book.filterByFirstname(req.query.firstname));
  } else {
    res.status(200).json(Book.findAll());
  }
};

exports.save = (req, res) => {
  const author = new Author(
    req.body.author.authorId,
    req.body.author.firstname,
    req.body.author.lastname
  );

  const book = new Book(req.body.title, author).save();

  res.status(201).json(book);
};

exports.findById = (req, res) => {
  res.status(200).json(Book.findById(req.params.bookId));
};
