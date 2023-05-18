document
  .querySelectorAll(".zoom-container")
  .forEach((el) => {
    el.onclick = () => el.classList.toggle("zoom")
  })

