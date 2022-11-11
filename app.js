const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
// const  engine = require('express-handlebars')

const connectDB = require("./config/db")

//load config
dotenv.config({path: "./config/config.env"})

connectDB()

const app = express()

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev")) // shows response of http method on console
}

//handlebars
// app.engine('.hbs', engine());
// app.set('view engine', '.hbs');
// app.set('views', './views');
app.engine(".hbs", exphbs.engine({defaultLayout: "main" , extname: ".hbs"}))
app.set("view engine", ".hbs")

const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))