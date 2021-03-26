"use strict"

const form = () => {
  const form = document.createElement("form")

  form.appendChild(Create_form("#", "font", "GET"))
  form.appendChild(Create_form("#", "data", "GET"))
  form.appendChild(Create_form("#", "color", "GET"))

  return form
}
