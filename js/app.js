const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(`No element found for selector: ${selector}`)
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = getElement(".nav-toggle")
  const navLinks = getElement(".nav-links")

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-links")
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        navLinks.classList.remove("show-links")
      }
    })
  })

  document.addEventListener("click", (e) => {
    if (window.innerWidth < 992 && !e.target.closest(".navbar")) {
      navLinks.classList.remove("show-links")
    }
  })

  let lastWidth = window.innerWidth
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 && lastWidth < 992) {
      navLinks.classList.remove("show-links")
    }
    lastWidth = window.innerWidth
  })

  const dateElement = document.querySelector("#date")
  if (dateElement) {
    dateElement.textContent = new Date().getFullYear()
  }
})
