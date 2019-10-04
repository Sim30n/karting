const path = require("path")
const express = require("express")
const hbs = require("hbs")
const imatra = require("./imatra.json")
const vantaa = require("./vantaa.json")
let imatraOtsikko = "Imatran GP"
let vantaaOtsikko = "Vantaan GP"

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
  res.render("index")
})

app.get("/tulokset", (req, res) =>{
  res.render("tulokset", {
    imatraPetteri: imatra.driver[0].name,
    imatraVille: imatra.driver[1].name,
    imatraLauri: imatra.driver[2].name,
    imatraJani: imatra.driver[3].name,
    imatraToni: imatra.driver[4].name,
    imatraKisaAikaPetteri: imatra.driver[0].circuitTime,
    imatraKisaAikaVille: imatra.driver[1].circuitTime,
    imatraKisaAikaLauri: imatra.driver[2].circuitTime,
    imatraKisaAikaJani: imatra.driver[3].circuitTime,
    imatraKisaAikaToni: imatra.driver[4].circuitTime,
    imatraAaikaPetteri: imatra.driver[0].qualTime,
    imatraAaikaVille: imatra.driver[1].qualTime,
    imatraAaikaLauri: imatra.driver[2].qualTime,
    imatraAaikaJani: imatra.driver[3].qualTime,
    imatraAaikaToni: imatra.driver[4].qualTime,
    vantaaPetteri: vantaa.driver[0].name,
    vantaaVille: vantaa.driver[1].name,
    vantaaLauri: vantaa.driver[2].name,
    vantaaJani: vantaa.driver[3].name,
    vantaaToni: vantaa.driver[4].name,
    vantaaKisaAikaPetteri: vantaa.driver[0].circuitTime,
    vantaaKisaAikaVille: vantaa.driver[1].circuitTime,
    vantaaKisaAikaLauri: vantaa.driver[2].circuitTime,
    vantaaKisaAikaJani: vantaa.driver[3].circuitTime,
    vantaaKisaAikaToni: vantaa.driver[4].circuitTime,
    vantaaAaikaPetteri: vantaa.driver[0].qualTime,
    vantaaAaikaVille: vantaa.driver[1].qualTime,
    vantaaAaikaLauri: vantaa.driver[2].qualTime,
    vantaaAaikaJani: vantaa.driver[3].qualTime,
    vantaaAaikaToni: vantaa.driver[4].qualTime
  })
})

app.get("/osakilpailut", (req, res) =>{
  res.render("osakilpailut")
})

app.get("/imatra", (req, res) =>{
  res.render("imatra",{
    otsikko: imatraOtsikko
  })
})

app.get("/vantaa", (req, res) =>{
  res.render("vantaa",{
    otsikko: vantaaOtsikko
  })
})

app.get("/kuljettajat", (req, res) =>{
  res.render("kuljettajat")
})

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
