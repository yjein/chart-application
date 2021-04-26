import React, { useState } from "react"
import MainPage from "./components/Pages/MainPage"
import ChartPage from "./components/Pages/ChartPage"

export type PageType = "MainPage" | "ChartPage"

const App = () => {
  const [PageState, setPageState] = useState<PageType>("MainPage")
  const [chartState, setChartState] = useState("Bar")
  return (
    <>
      {PageState === "MainPage" && <MainPage setPageState={setPageState} />}
      {PageState === "ChartPage" && (
        <ChartPage
          setPageState={setPageState}
          chartState={chartState}
          setChartState={setChartState}
        />
      )}
    </>
  )
}

export default App
