const getStudents = (req, res) => {
  res.status(200).json({
    message: 'Get Students'
  })
}

const getStudentById = (req, res) => {
  res.status(200).json({
    message: `Get Student By ${req.params.id}`
  })
}

export { getStudents, getStudentById }
