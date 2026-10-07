document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('#counter')

  if (counter) {
    const storedVisits = Number(localStorage.getItem('retroVisits')) || 0
    const visits = storedVisits + 1

    localStorage.setItem('retroVisits', String(visits))
    counter.textContent = String(visits).padStart(6, '0')
  }

  const mood = document.querySelector('#mood')

  if (mood) {
    const moods = [
      'coding...',
      'drinking coffee...',
      'debugging...',
      'listening to music...',
      'exploring the Internet...'
    ]

    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    mood.textContent = randomMood
  }

  const guestbookForm = document.querySelector('#guestbook-form')
  const guestbookMessage = document.querySelector('#guestbook-message')

  if (guestbookForm && guestbookMessage) {
    guestbookForm.addEventListener('submit', (event) => {
      event.preventDefault()

      const nameInput = document.querySelector('#guest-name')
      const messageInput = document.querySelector('#guest-message')

      if (!nameInput || !messageInput) {
        return
      }

      const name = nameInput.value.trim()

      guestbookMessage.textContent =
        `★ Thanks, ${name}! Your message has been received by the Internet! ★`

      guestbookForm.reset()
    })
  }

  const blinkElements = document.querySelectorAll('.blink, .blink-text')

  blinkElements.forEach((element) => {
    setInterval(() => {
      element.style.visibility =
        element.style.visibility === 'hidden' ? 'visible' : 'hidden'
    }, 700)
  })
})