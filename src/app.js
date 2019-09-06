const path = require("path")
const express = require("express")
const hbs = require("hbs")
const drivers = require("./data.json")

const app = express()
const port = process.env.PORT || 3000

//Definie paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) =>{
  res.render("index", {
    petteri: drivers.driver[0].name,
    ville: drivers.driver[1].name,
    lauri: drivers.driver[2].name,
    jani: drivers.driver[3].name,
    toni: drivers.driver[4].name,
    kisaAikaPetteri: drivers.driver[0].circuitTime,
    kisaAikaVille: drivers.driver[1].circuitTime,
    kisaAikaLauri: drivers.driver[2].circuitTime,
    kisaAikaJani: drivers.driver[3].circuitTime,
    kisaAikaToni: drivers.driver[4].circuitTime,
    aAikaPetteri: drivers.driver[0].qualTime,
    aAikaVille: drivers.driver[1].qualTime,
    aAikaLauri: drivers.driver[2].qualTime,
    aAikaJani: drivers.driver[3].qualTime,
    aAikaToni: drivers.driver[4].qualTime
  })
})


app.listen(port, () => {
  console.log("Server is up on port " + port)
})
