const toggleAnswer = (e) => {
  e.target.nextElementSibling.classList.toggle('hide');
}

document.querySelectorAll(".myBtn").forEach((btn) => {
  btn.addEventListener("click", toggleAnswer)
})