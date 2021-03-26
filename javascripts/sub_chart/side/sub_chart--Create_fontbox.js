"use strict"

const Create_fontbox = () => {
  const Create_fontbox = document.createElement("div")
  Create_fontbox.classList.add("box")

  Create_fontbox.appendChild(Create_div("Font Style"))
  Create_fontbox.appendChild(Create_input("text", "style"))

  Create_fontbox.appendChild(Create_div("Font Size"))
  Create_fontbox.appendChild(Create_input("number", "size"))

  Create_fontbox.appendChild(Create_div("Weight"))
  Create_fontbox.appendChild(Create_input("text", "weight"))

  return Create_fontbox
}
