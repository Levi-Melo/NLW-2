const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "999999999", 
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject:"Química", 
    cost: "20", 
    weekday:[0], 
    time_from:[720], 
    time_to:[1220]
  },
  {
    name: "Levi Melo dos Santos",
    avatar: "https://avatars3.githubusercontent.com/u/68166819?s=460&u=795ea1ca7bcff6d0b9b2ed0b220e2f9aa0a2d944&v=4",
    whatsapp: "999999999", 
    bio:"Aprenda a olhar o nada como nunca", 
    subject:"Olhar o Nada", 
    cost: "10000", 
    weekday:[1], 
    time_from:[720], 
    time_to:[1220]
  }
]
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]
function getSubject(subjectNumber){
  const positionArray = +subjectNumber-1
  return subjects[positionArray]
}
function pageLanding(req,res){
  return res.render("index.html")
}

function pageStudy(req,res){
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
  const data = req.query
  //add to proffy[]
  const isNotEmpty = Object.keys(data).length > 0
  if(isNotEmpty){
  
    data.subject = getSubject(data.subject)

    proffys.push(data)
    return res.redirect("/study")
  }
  return res.render("give-classes.html", {proffys, subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
//config for static archives
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
  
})
server.use(express.static("public"))
//rotes of aplication
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes",pageGiveClasses)
  .listen(5500)
