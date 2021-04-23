import React from "react"
import styled from "styled-components"
import ChartHeader from "../Templates/ChartHeader"
import ChartAside from "../Templates/ChartAside"
import ChartMain from "../Templates/ChartMain"
import ChartList from "../Organisms/ChartList"
import Button from "../Atoms/Button"
import ChartNav from "../Organisms/ChartNav"
import ChartChart from "../Organisms/ChartChart"
import { PageType } from "../../App"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 100%;
`

interface Prop {
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}

const ChartPage: React.FC<Prop> = ({ setPageState }) => {
  return (
    <Wrapper>
      <ChartHeader>
        <div>
          <Button>=</Button>
        </div>
        <ChartNav setPageState={setPageState} />
      </ChartHeader>

      <ChartAside>
        <ChartList />
      </ChartAside>

      <ChartMain>
        <ChartChart />
      </ChartMain>
    </Wrapper>
  )
}

export default ChartPage
