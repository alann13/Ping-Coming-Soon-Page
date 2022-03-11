import '@styles/index.css'

const form = document.querySelector('form')
const formErrorMessage = document.querySelector('.form-error-message')
const formEmailInput = document.querySelector('.email-input')

const isEmailValid = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return emailRegex.test(email)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  const email = formData.get('email').toString()

  if (!isEmailValid(email)) {
    formEmailInput.classList.add('error-state')
    formErrorMessage.classList.remove('hidden')
  } else {
    formEmailInput.classList.remove('error-state')
    formErrorMessage.classList.add('hidden')
    form.reset()
  }
})
