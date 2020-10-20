const path = require("path")
const express = require("express")
const hbs = require("hbs")
const imatra = require("./imatra.json")
const vantaa = require("./vantaa.json")
const lahti = require("./lahti.json")
const pw1 = require("./pw1.json")
const pw2 = require("./pw2.json")
const vantaa2 = require("./vantaa2.json")
let imatraOtsikko = "Imatran GP"
let vantaaOtsikko = "Vantaan GP"
let lahtiOtsikko = "Lahden GP"

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
    // imatra
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
    // vantaa
    vantaaPetteri: vantaa.driver[0].name,
    vantaaVilleL: vantaa.driver[1].name,
    vantaaLauri: vantaa.driver[2].name,
    vantaaJani: vantaa.driver[3].name,
    vantaaMika: vantaa.driver[4].name,
    vantaaJakala: vantaa.driver[5].name,
    vantaaJuha: vantaa.driver[6].name,
    vantaaKisaAikaPetteri: vantaa.driver[0].circuitTime,
    vantaaKisaAikaVilleL: vantaa.driver[1].circuitTime,
    vantaaKisaAikaLauri: vantaa.driver[2].circuitTime,
    vantaaKisaAikaJani: vantaa.driver[3].circuitTime,
    vantaaKisaAikaMika: vantaa.driver[4].circuitTime,
    vantaaKisaAikaJakala: vantaa.driver[5].circuitTime,
    vantaaKisaAikaJuha: vantaa.driver[6].circuitTime,
    vantaaAaikaPetteri: vantaa.driver[0].qualTime,
    vantaaAaikaVilleL: vantaa.driver[1].qualTime,
    vantaaAaikaLauri: vantaa.driver[2].qualTime,
    vantaaAaikaJani: vantaa.driver[3].qualTime,
    vantaaAaikaMika: vantaa.driver[4].qualTime,
    vantaaAaikaJakala: vantaa.driver[5].qualTime,
    vantaaAaikaJuha: vantaa.driver[6].qualTime,
    // lahti
    lahtiPetteri: lahti.driver[0].name,
    lahtiVilleS: lahti.driver[1].name,
    lahtiLauri: lahti.driver[2].name,
    lahtiJani: lahti.driver[3].name,
    lahtiMika: lahti.driver[4].name,
    lahtiJoni: lahti.driver[5].name,
    lahtiJere: lahti.driver[6].name,
    lahtiJuha: lahti.driver[7].name,
    lahtiKisaAikaPetteri: lahti.driver[0].circuitTime,
    lahtiKisaAikaVilleS: lahti.driver[1].circuitTime,
    lahtiKisaAikaLauri: lahti.driver[2].circuitTime,
    lahtiKisaAikaJani: lahti.driver[3].circuitTime,
    lahtiKisaAikaMika: lahti.driver[4].circuitTime,
    lahtiKisaAikaJoni: lahti.driver[5].circuitTime,
    lahtiKisaAikaJere: lahti.driver[6].circuitTime,
    lahtiKisaAikaJuha: lahti.driver[7].circuitTime,
    lahtiAaikaPetteri: lahti.driver[0].qualTime,
    lahtiAaikaVilleS: lahti.driver[1].qualTime,
    lahtiAaikaLauri: lahti.driver[2].qualTime,
    lahtiAaikaJani: lahti.driver[3].qualTime,
    lahtiAaikaMika: lahti.driver[4].qualTime,
    lahtiAaikaJoni: lahti.driver[5].qualTime,
    lahtiAaikaJere: lahti.driver[6].qualTime,
    lahtiAaikaJuha: lahti.driver[7].qualTime,
    // PowerPark 1
    pw1Petteri: pw1.driver[0].name,
    pw1VilleS: pw1.driver[1].name,
    pw1Lauri: pw1.driver[2].name,
    pw1Jani: pw1.driver[3].name,
    pw1Mika: pw1.driver[4].name,
    pw1Joni: pw1.driver[5].name,
    pw1Jouni: pw1.driver[6].name,
    pw1JuhaK: pw1.driver[7].name,
    pw1Antti: pw1.driver[8].name,
    pw1Tommi: pw1.driver[9].name,
    pw1KisaAikaPetteri: pw1.driver[0].circuitTime,
    pw1KisaAikaVilleS: pw1.driver[1].circuitTime,
    pw1KisaAikaLauri: pw1.driver[2].circuitTime,
    pw1KisaAikaJani: pw1.driver[3].circuitTime,
    pw1KisaAikaMika: pw1.driver[4].circuitTime,
    pw1KisaAikaJoni: pw1.driver[5].circuitTime,
    pw1KisaAikaJouni: pw1.driver[6].circuitTime,
    pw1KisaAikaJuhaK: pw1.driver[7].circuitTime,
    pw1KisaAikaAntti: pw1.driver[8].circuitTime,
    pw1KisaAikaTommi: pw1.driver[9].circuitTime,
    pw1AaikaPetteri: pw1.driver[0].qualTime,
    pw1AaikaVilleS: pw1.driver[1].qualTime,
    pw1AaikaLauri: pw1.driver[2].qualTime,
    pw1AaikaJani: pw1.driver[3].qualTime,
    pw1AaikaMika: pw1.driver[4].qualTime,
    pw1AaikaJoni: pw1.driver[5].qualTime,
    pw1AaikaJouni: pw1.driver[6].qualTime,
    pw1AaikaJuhaK: pw1.driver[7].qualTime,
    pw1AaikaAntti: pw1.driver[8].qualTime,
    pw1AaikaTommi: pw1.driver[9].qualTime,
    // PowerPark II
    pw2Petteri: pw2.driver[0].name,
    pw2VilleS: pw2.driver[1].name,
    pw2Lauri: pw2.driver[2].name,
    pw2Jani: pw2.driver[3].name,
    pw2Mika: pw2.driver[4].name,
    pw2Joni: pw2.driver[5].name,
    pw2Jouni: pw2.driver[6].name,
    pw2JuhaK: pw2.driver[7].name,
    pw2Antti: pw2.driver[8].name,
    pw2Tommi: pw2.driver[9].name,
    pw2KisaAikaPetteri: pw2.driver[0].circuitTime,
    pw2KisaAikaVilleS: pw2.driver[1].circuitTime,
    pw2KisaAikaLauri: pw2.driver[2].circuitTime,
    pw2KisaAikaJani: pw2.driver[3].circuitTime,
    pw2KisaAikaMika: pw2.driver[4].circuitTime,
    pw2KisaAikaJoni: pw2.driver[5].circuitTime,
    pw2KisaAikaJouni: pw2.driver[6].circuitTime,
    pw2KisaAikaJuhaK: pw2.driver[7].circuitTime,
    pw2KisaAikaAntti: pw2.driver[8].circuitTime,
    pw2KisaAikaTommi: pw2.driver[9].circuitTime,
    // Vantaa II
    vantaa2Petteri: vantaa2.driver[0].name,
    vantaa2VilleS: vantaa2.driver[1].name,
    vantaa2Lauri: vantaa2.driver[2].name,
    vantaa2Jere: vantaa2.driver[3].name,
    vantaa2Mika: vantaa2.driver[4].name,
    vantaa2Joni: vantaa2.driver[5].name,
    vantaa2Jouni: vantaa2.driver[6].name,
    vantaa2VilleL: vantaa2.driver[7].name,
    vantaa2KisaAikaPetteri: vantaa2.driver[0].circuitTime,
    vantaa2KisaAikaVilleS: vantaa2.driver[1].circuitTime,
    vantaa2KisaAikaLauri: vantaa2.driver[2].circuitTime,
    vantaa2KisaAikaJere: vantaa2.driver[3].circuitTime,
    vantaa2KisaAikaMika: vantaa2.driver[4].circuitTime,
    vantaa2KisaAikaJoni: vantaa2.driver[5].circuitTime,
    vantaa2KisaAikaJouni: vantaa2.driver[6].circuitTime,
    vantaa2KisaAikaVilleL: vantaa2.driver[7].circuitTime,
    vantaa2AaikaPetteri: vantaa2.driver[0].qualTime,
    vantaa2AaikaVilleS: vantaa2.driver[1].qualTime,
    vantaa2AaikaLauri: vantaa2.driver[2].qualTime,
    vantaa2AaikaJere: vantaa2.driver[3].qualTime,
    vantaa2AaikaMika: vantaa2.driver[4].qualTime,
    vantaa2AaikaJoni: vantaa2.driver[5].qualTime,
    vantaa2AaikaJouni: vantaa2.driver[6].qualTime,
    vantaa2AaikaVilleL: vantaa2.driver[7].qualTime,
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

app.get("/lahti", (req, res) =>{
  res.render("lahti",{
    otsikko: lahtiOtsikko
  })
})

app.get("/kuljettajat", (req, res) =>{
  res.render("kuljettajat")
})

app.get("/petteri", (req, res) =>{
  res.render("petteri")
})

app.get("/lauri", (req, res) =>{
  res.render("lauri")
})

app.get("/jamppa", (req, res) =>{
  res.render("jamppa")
})

app.get("/villes", (req, res) =>{
  res.render("villes")
})

app.get("/toni", (req, res) =>{
  res.render("toni")
})

app.get("/juha", (req, res) =>{
  res.render("juha")
})

app.get("/jere", (req, res) =>{
  res.render("jere")
})

app.get("/mika", (req, res) =>{
  res.render("mika")
})

app.get("/villel", (req, res) =>{
  res.render("villel")
})

app.get("/joni", (req, res) =>{
  res.render("joni")
})

app.get("/jouni", (req, res) =>{
  res.render("jouni")
})

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
