"use strict"

const Create_databox = () => {
  const Create_databox = document.createElement("div")
  Create_databox.classList.add("box")

  Create_databox.appendChild(Create_div("Data 1"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 2"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 3"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 4"))
  Create_databox.appendChild(Create_input("text", "data"))

  return Create_databox
}
