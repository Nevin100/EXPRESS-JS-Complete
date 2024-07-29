import express from "express";
import {
  allStudents,
  createStudents,
  updateStudents,
  deleteStudents,
} from "../controllers/students.js";

const router = express.Router();
router.get("/all", allStudents);

router.post("/create", createStudents);

router.put("/update", updateStudents);

router.delete("/delete", deleteStudents);
export default router;
