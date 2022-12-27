const express = require("express")
const router = require("./routes")
const app = express()
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 6001


app.use(express.static(path.join(__dirname, '/assets')))
app.use(cors());
app.use(express.json());

app.use("/api",router)
app.listen(PORT, ()=> {
    console.log("App is listening on port : " + PORT)
})