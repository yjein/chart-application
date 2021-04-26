import React, { useState } from "react"
import MainPage from "./components/Pages/MainPage"
import ChartPage from "./components/Pages/ChartPage"
import { ChartDataType } from "./assets/ChartData"
export type PageType = "MainPage" | "ChartPage"

const App = () => {
  const [pageState, setPageState] = useState<PageType>("MainPage")
  const [chartState, setChartState] = useState<ChartDataType>("Bar")
  const [toggleState, setToggleState] = useState<boolean>(true)

  return (
    <>
      {pageState === "MainPage" && <MainPage setPageState={setPageState} />}
      {pageState === "ChartPage" && (
        <ChartPage
          setPageState={setPageState}
          chartState={chartState}
          setChartState={setChartState}
          toggleState={toggleState}
          setToggleState={setToggleState}
        />
      )}
    </>
  )
}

export default App
