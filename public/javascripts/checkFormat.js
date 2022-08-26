const form = document.querySelector('#form')
const inputText = document.querySelector('.btn-confirm')

form.addEventListener('click', event => {
  if (event.target.classList.contains('btn-confirm')) {
    if (!form.checkValidity()) {
      event.stopPropagation()
      event.preventDefault()
      alert('請輸入格式正確的 URL')
    }
  }
})