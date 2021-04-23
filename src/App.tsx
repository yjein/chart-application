import React, { useState } from "react"
import MainPage from "./components/Pages/MainPage"
import ChartPage from "./components/Pages/ChartPage"

type Pages = "MainPage" | "ChartPage"

const App = () => {
  const [PageState, SetPageState] = useState<Pages>("MainPage")

  return (
    <>
      {PageState === "MainPage" && <MainPage />}
      {PageState === "ChartPage" && <ChartPage />}
    </>
  )
}

export default App
