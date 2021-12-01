require("dotenv").config()
const express = require("express")
let app = express()
let weatherController = require("./controllers/weatherData")


app.get("/oneCall", weatherController.oneCall)
app.get("/cityWeather", weatherController.cityWeather)

app.set("port", 4010)

app.listen(app.get("port"), () => {
    console.log(`App running on port ${app.get("port")}`)
})

// console.log("api_key: ",process.env.api_key)
// app.listen(4010, () => {
//     console.log(`App running on port 4010`)
// })