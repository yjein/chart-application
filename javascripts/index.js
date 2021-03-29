let instance

class ChartProject {
  constructor(rootSeletor) {
    if (instance) return instance
    this.root = document.querySelector(rootSeletor)
    this.div = document.createElement("div")
    this.root.appendChild(this.div)
    this.pageStatus = "main"
    instance = this
  }

  setRoot(rootSeletor) {
    this.root = document.querySelector(rootSeletor)
  }

  setPage(pageStatus) {
    this.pageStatus = pageStatus
    this.routing()
  }

  routing() {
    this.root.removeChild(this.div)

    switch (this.pageStatus) {
      case "chart":
        this.div = chartWrapper()
        break
      case "main":
      default:
        this.div = mainWrapper()
        break
    }

    this.root.appendChild(this.div)
  }

  run() {
    this.routing()
  }
}

const chartProject = new ChartProject("#root")
chartProject.run()
