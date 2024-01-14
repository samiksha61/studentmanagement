const  db = require("../db/db")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    db.db,
    db.username,
    db.password,
    {
        host: db.host,
        dialect: db.dialect,
        pool: {
            max: db.pool.max,
            min: db.pool.min,
            idle: db.pool.idle,
            acquire: db.pool.acquire,
        }
    },
)
sequelize
    .authenticate()
    .then(()=>{
        console.log("Connected to Database successfully")
    })
    .catch((err)=>{
        console.log("connection failed", err)
    })

const database = {}
database.Sequelize = Sequelize
database.sequelize = sequelize

database.blogs = require("./../model/student.js")(sequelize, Sequelize);
module.exports = database
