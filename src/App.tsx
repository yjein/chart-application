import React, { useState } from "react"
import MainPage from "./components/Pages/MainPage"
import ChartPage from "./components/Pages/ChartPage"

export type PageType = "MainPage" | "ChartPage"

const App = () => {
  const [PageState, setPageState] = useState<PageType>("MainPage")

  return (
    <>
      {PageState === "MainPage" && <MainPage setPageState={setPageState} />}
      {PageState === "ChartPage" && <ChartPage setPageState={setPageState} />}
    </>
  )
}

export default App
