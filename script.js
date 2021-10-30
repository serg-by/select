import Select from "./select.js"

const selectElements = document.querySelectorAll("[data-custom]")

selectElements.forEach(selectElement => {
  new Select(selectElement)
})

const ulAttribute = document.querySelector('.custom-select-options');
ulAttribute.setAttribute("aria-label", "Выбрать город");
