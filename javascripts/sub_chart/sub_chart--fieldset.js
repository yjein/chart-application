"use strict"

const fieldset = (id) => {
  const fieldset = document.createElement("fieldset")

  switch (id) {
    case "font": {
      fieldset.appendChild(Create_fontbox())
      break
    }
    case "data": {
      fieldset.appendChild(Create_databox())
      break
    }
    case "color": {
      fieldset.appendChild(Create_colorbox())
      break
    }
    default: {
      break
    }
  }
  return fieldset
}
