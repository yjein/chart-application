import Div from "../Atoms/div"
import Image from "../Atoms/img"

import barUrl from "../../assets/charts/bar.png"
import lineUrl from "../../assets/charts/line.png"
import candlestickUrl from "../../assets/charts/candlestick.png"
import funnelUrl from "../../assets/charts/funnel.png"
import gaugeUrl from "../../assets/charts/gauge.png"
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
  funnelUrl,
  gaugeUrl,
  parallelUrl,
  pictorialbarUrl,
  pieUrl,
  radarUrl,
  sankeyUrl,
  scatterUrl,
  sunburstUrl,
]

const DashBordImg = () => {
  const DashBordImg: Array<JSX.Element> = []

  Urls.forEach((item) => {
    DashBordImg.push(
      <Div>
        <Image Url={item} />
      </Div>
    )
  })

  return DashBordImg
}

export default DashBordImg
