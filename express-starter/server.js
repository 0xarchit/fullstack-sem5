import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.status(200).json({
    result: "success"
  })
})

app.get("/home", (req, res) => {
  res.status(200).json({
    result: "at home"
  })
})

app.get("/about", (req, res) => {
  res.status(200).json({
    result: "about"
  })
})

app.post("/upload", (req, res) => {
  console.log(req.body)
  res.status(200).json({
    result: "uploaded"
  })
})

app.use((req, res) => {
  res.status(404).json({
    result: "not found"
  })
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
