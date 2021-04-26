import React, { useState } from "react"
import MainPage from "./components/Pages/MainPage"
import ChartPage from "./components/Pages/ChartPage"

export type PageType = "MainPage" | "ChartPage"

const App = () => {
  const [pageState, setPageState] = useState<PageType>("MainPage")

  return (
    <>
      {pageState === "MainPage" && <MainPage setPageState={setPageState} />}
      {pageState === "ChartPage" && <ChartPage setPageState={setPageState} />}
    </>
  )
}

export default App
