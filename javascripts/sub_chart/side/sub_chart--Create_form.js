"use strict"

const Create_form = (action, id, method) => {
  const Create_form = document.createElement("form")

  Create_form.action = action
  Create_form.id = id
  Create_form.method = method

  Create_form.appendChild(fieldset(id))
  return Create_form
}
