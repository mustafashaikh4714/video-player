
const express = require("express")	
const bodyParser = require("body-parser")	
const path = require("path")	
const api = require("./server/routes/api")	

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", api)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(PORT, () => console.log(`Server is started on ${PORT}`))
