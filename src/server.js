

const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

const nunjucks = require('nunjucks')
//config for static archives
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
  
})
server
//receiving body
  .use(express.urlencoded({ extended: true}))
  .use(express.static("public"))
//rotes of aplication
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes",pageGiveClasses)
  .post("/save-classes",saveClasses)
  .listen(5500)
