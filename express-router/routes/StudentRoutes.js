import express from "express"
const router = express.Router()


router.get("/allStudents", (req, res) => {
    res.status(200).send("All Students")
})

router.get("/student/:id", (req, res) => {
  res.status(200).json({ "Student with id" : req.params.id })
})

export default router;
