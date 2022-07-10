ScrollReveal({
  origin: 'right',
  distance: '150px',
  duration: 1700
}).reveal(`#imgDescriptionRight1, #imgDescriptionRight2`)

ScrollReveal({
  origin: 'left',
  distance: '150px',
  duration: 1700
}).reveal(`#imgDescriptionLeft1, #imgDescriptionLeft2`)

function verifyValueInput() {
  let valueEmail = document.getElementById('email')
  let valueInput = valueEmail.value
  let button = document.getElementById('buttonInput')

  if (valueInput) {
    button.disabled = false
    button.classList.add('hover')
  }
}

function sendInput() {
  let valueEmail = document.getElementById('email')
  let valueInput = valueEmail.value
  let button = document.getElementById('buttonInput')

  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
  let resultRegex = valueInput.match(regex)

  console.log('valueInput', valueInput)
  if (valueInput) {
    button.disabled = false
    if (resultRegex != null) {
      swal({
        title: 'Boa!',
        text: 'Obrigado por se inscrever.',
        icon: 'success',
        button: 'Fechar'
      })
    } else {
      swal({
        title: 'Erro!',
        text: 'Favor inserir um e-mail válido.',
        icon: 'error',
        button: 'Fechar'
      })
    }
  }

  setTimeout(
    () => (valueEmail.value = ''),
    (valueInput = ''),
    (button.disabled = true),
    button.classList.remove('hover'),
    800
  )
}
