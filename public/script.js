const counterElement = document.getElementById('counter')
const visitButton = document.getElementById('visitButton')
const messageElement = document.getElementById('message')
const guestbookForm = document.getElementById('guestbookForm')
const guestName = document.getElementById('guestName')
const guestMessage = document.getElementById('guestMessage')

let visits = 1

visitButton.addEventListener('click', () => {
  visits += 1

  counterElement.textContent = String(visits).padStart(6, '0')
  messageElement.textContent = 'You clicked the button!!! WOW!!!'
})

guestbookForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = guestName.value.trim()

  if (name === '') {
    guestMessage.textContent = 'Please enter your name!'
    return
  }

  guestMessage.textContent = `Thanks for signing the guestbook, ${name}!!!`
  guestName.value = ''
})
