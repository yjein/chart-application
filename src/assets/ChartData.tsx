import barUrl from "./charts/bar.png"
import lineUrl from "./charts/line.png"
import candlestickUrl from "./charts/candlestick.png"
import gaugeUrl from "./charts/gauge.png"
import funnelUrl from "./charts/funnel.png"
import parallelUrl from "./charts/parallel.png"
import pictorialbarUrl from "./charts/pictorialbar.png"
import pieUrl from "./charts/pie.png"
import radarUrl from "./charts/radar.png"
import sankeyUrl from "./charts/sankey.png"
import scatterUrl from "./charts/scatter.png"
import sunburstUrl from "./charts/sunburst.png"

import barOption from "./Options/barOption"
import lineOption from "./Options/lineOption"
import candlestickOption from "./Options/candlestickOption"
import gaugeOption from "./Options/gaugeOption"
import funnelOption from "./Options/funnelOption"
import parallelOption from "./Options/parallelOption"
import pictorialbarOption from "./Options/pictorialBarOption"
import pieOption from "./Options/pieOption"
import radarOption from "./Options/radarOption"
import sankeyOption from "./Options/sankeyOption"
import scatterOption from "./Options/scatterOption"
import sunburstOption from "./Options/sunburstOption"

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