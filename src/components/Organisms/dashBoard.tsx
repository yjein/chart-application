import styled from "styled-components"
import Image from "../Atoms/img"

import barUrl from "../../assets/charts/bar.png"
import lineUrl from "../../assets/charts/line.png"
import candlestickUrl from "../../assets/charts/candlestick.png"
import gaugeUrl from "../../assets/charts/gauge.png"
import funnelUrl from "../../assets/charts/funnel.png"
import parallelUrl from "../../assets/charts/parallel.png"
import pictorialbarUrl from "../../assets/charts/pictorialbar.png"
import pieUrl from "../../assets/charts/pie.png"
import radarUrl from "../../assets/charts/radar.png"
import sankeyUrl from "../../assets/charts/sankey.png"
import scatterUrl from "../../assets/charts/scatter.png"
import sunburstUrl from "../../assets/charts/sunburst.png"

const Urls = [
  barUrl,
  lineUrl,
  candlestickUrl,
  gaugeUrl,
  funnelUrl,
  parallelUrl,
  pictorialbarUrl,
  pieUrl,
  radarUrl,
  sankeyUrl,
  scatterUrl,
  sunburstUrl,
]

const DashBordStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const Div = styled.div`
  background-color: #ffffff;

  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
  }
`

const DashBord = () => {
  return (
    <DashBordStyle>
      {Urls.map((item) => (
        <Div>
          <Image url={item} />
        </Div>
      ))}
    </DashBordStyle>
  )
}

export default DashBord
