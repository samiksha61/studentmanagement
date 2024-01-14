const express = require ('express')
const app = express()

const db = require('./model/index')
db.sequelize.sync({ force: true})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const createRoutes = require("./routes/routeSt.js")
app.use("/api", createRoutes)

let port = 3000
app.listen(port, ()=>{
    console.log(`Server is started in ${port}`)
})