import barUrl from "./ChartImages/bar.png"
import lineUrl from "./ChartImages/line.png"
import candlestickUrl from "./ChartImages/candlestick.png"
import gaugeUrl from "./ChartImages/gauge.png"
import funnelUrl from "./ChartImages/funnel.png"
import parallelUrl from "./ChartImages/parallel.png"
import pictorialbarUrl from "./ChartImages/pictorialbar.png"
import pieUrl from "./ChartImages/pie.png"
import radarUrl from "./ChartImages/radar.png"
import sankeyUrl from "./ChartImages/sankey.png"
import scatterUrl from "./ChartImages/scatter.png"
import sunburstUrl from "./ChartImages/sunburst.png"

import barOption from "./ChartOptions/barOption"
import lineOption from "./ChartOptions/lineOption"
import candlestickOption from "./ChartOptions/candlestickOption"
import gaugeOption from "./ChartOptions/gaugeOption"
import funnelOption from "./ChartOptions/funnelOption"
import parallelOption from "./ChartOptions/parallelOption"
import pictorialbarOption from "./ChartOptions/pictorialBarOption"
import pieOption from "./ChartOptions/pieOption"
import radarOption from "./ChartOptions/radarOption"
import sankeyOption from "./ChartOptions/sankeyOption"
import scatterOption from "./ChartOptions/scatterOption"
import sunburstOption from "./ChartOptions/sunburstOption"

const ChartData = {
  Bar: {
    Option: barOption,
    Url: barUrl,
  },
  Line: {
    Option: lineOption,
    Url: lineUrl,
  },
  Candlestick: {
    Option: candlestickOption,
    Url: candlestickUrl,
  },
  Gauge: {
    Option: gaugeOption,
    Url: gaugeUrl,
  },
  Funnel: {
    Option: funnelOption,
    Url: funnelUrl,
  },
  Parallel: {
    Option: parallelOption,
    Url: parallelUrl,
  },
  Pictorialbar: {
    Option: pictorialbarOption,
    Url: pictorialbarUrl,
  },
  Pie: {
    Option: pieOption,
    Url: pieUrl,
  },
  Radar: {
    Option: radarOption,
    Url: radarUrl,
  },
  Sankey: {
    Option: sankeyOption,
    Url: sankeyUrl,
  },
  Scatter: {
    Option: scatterOption,
    Url: scatterUrl,
  },
  Sunburst: {
    Option: sunburstOption,
    Url: sunburstUrl,
  },
}

export default ChartData
export type ChartDataType = keyof typeof ChartData
