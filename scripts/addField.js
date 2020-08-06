document.querySelector("#add-time")
.addEventListener('click', addHour)

function addHour(){
  const newHourField = document.querySelector('.schedule-item').cloneNode(true)

  const fields = newHourField.querySelectorAll('input')

    fields.forEach(field => {
      console.log(field)
      field.value=''
    });

  document.querySelector('#schedule-items').appendChild(newHourField)

}