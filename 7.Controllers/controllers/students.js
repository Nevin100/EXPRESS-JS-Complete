import express from "express";

const allStudents = (req, res) => {
  res.send("All Students!");
};

const createStudents = (req, res) => {
  res.send("Add new Student");
};

const updateStudents = (req, res) => {
  res.send("Update Student");
};

const deleteStudents = (req, res) => {
  res.send("Delete Student");
};

export { allStudents, createStudents, updateStudents, deleteStudents };
