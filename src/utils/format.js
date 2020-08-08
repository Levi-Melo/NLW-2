
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

function convertHourInMinute(time){
  const [hour, minutes]= time.split(':')
  return Number((hour * 60) + minutes)
}
module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHourInMinute
}