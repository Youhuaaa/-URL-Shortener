const copyToClipBoard = function () {
  console.log('in')
  const copyText = document.querySelector('.text-area').innerHTML
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      alert(`Copied：${copyText}`)
    })
    .catch(error => console.log(error))
}


