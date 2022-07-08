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

function sendInput() {
  let valueEmail = document.getElementById('email')
  let valueInput = valueEmail.value

  if (valueInput) {
    swal({
      title: 'Boa!',
      text: 'Obrigado por se inscrever.',
      icon: 'success',
      button: 'Fechar'
    })
  } else {
    swal({
      title: 'Erro!',
      text: 'Favor inserir um e-mail.',
      icon: 'error',
      button: 'Fechar'
    })
  }
  setTimeout(() => (valueEmail.value = ''), 800)
  console.log(valueInput)
}
