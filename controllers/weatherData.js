const axios = require("axios")

exports.oneCall = async (req, res) => {
    console.log("oneCall called...", req.body)

    let url = process.env.api_url + `/onecall?lat=19.41&lon=72.78&appid=${process.env.api_key}&units=metric`
    // let url = process.env.api_url + "?lat=33.44&lon=-94.04&appid=" + process.env.api_key

    let configuration = {}

    let data = {}

    await axios.get(url, data, configuration).then(async (result) => {
        console.log("oneCall response:", result.data)
        return res.json(result.data)
    })
}

exports.cityWeather = async (req, res) => {
    console.log("cityWeather called...")

    let configuration = {}
    let data = {}

    let cityWeatherUrl = process.env.api_url + `/weather?q=mumbai&appid=${process.env.api_key}&units=metric`
    let cityWeatherResp
    await axios.get(cityWeatherUrl, data, configuration).then(async (result) => {
        console.log("cityWeather response:", result.data)
        cityWeatherResp = result.data
        // return res.json(result.data)
    })

    let oneCallUrl = process.env.api_url + `/onecall?lat=${cityWeatherResp.coord.lat}&lon=${cityWeatherResp.coord.lon}&appid=${process.env.api_key}&units=metric&exclude=minutely,hourly`
    let oneCallResp
    await axios.get(oneCallUrl, data, configuration).then(async (result) => {
        console.log("oneCall response:", result.data)
        oneCallResp = result.data
        return res.json(result.data)
    })


}
