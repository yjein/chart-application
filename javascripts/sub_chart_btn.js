"use strict"

class SideBar {
  constructor() {
    this.sidebtn = document.querySelector(".sideBtn")
    this.events()
  }
  events() {
    this.sidebtn.addEventListener("click", () => this.toggleTheBar())
  }
  toggleTheBar() {
    document.querySelector(".sidebar").classList.toggle("--close")
  }
}

class OptionBar {
  constructor() {
    this.optbtn = document.querySelector(".optBtn")
    this.events()
  }
  events() {
    this.optbtn.addEventListener("click", () => this.toggleTheBar())
  }
  toggleTheBar() {
    document.querySelector(".chartOption").classList.toggle("--close")
  }
}

const side = new SideBar()
const opt = new OptionBar()