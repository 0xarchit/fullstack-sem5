import express from "express"
import { getStudents, getStudentById } from "../controller/studentController.js"
const router = express.Router()


router.get("/allStudents", getStudents)

router.get("/student/:id", getStudentById)

export default router;
