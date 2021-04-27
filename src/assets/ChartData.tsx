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

import { barGrid } from "./GridOptions/barGrid"
import { lineGrid } from "./GridOptions/lineGrid"
import { candlestickGrid } from "./GridOptions/candlestickGrid"
import { gaugeGrid } from "./GridOptions/gaugeGrid"
import { funnelGrid } from "./GridOptions/funnelGrid"
import { parallelGrid } from "./GridOptions/parallelGrid"
import { pictorialbarGrid } from "./GridOptions/pictorialbarGrid"
import { pieGrid } from "./GridOptions/pieGrid"
import { radarGrid } from "./GridOptions/radarGrid"
import { sankeyGrid } from "./GridOptions/sankeyGrid"
import { scatterGrid } from "./GridOptions/scatterGrid"
import { sunburstGrid } from "./GridOptions/sunburstGrid"

const ChartData = {
  Bar: {
    Option: barOption,
    Url: barUrl,
    Grid: barGrid,
  },
  Line: {
    Option: lineOption,
    Url: lineUrl,
    Grid: lineGrid,
  },
  Candlestick: {
    Option: candlestickOption,
    Url: candlestickUrl,
    Grid: candlestickGrid,
  },
  Gauge: {
    Option: gaugeOption,
    Url: gaugeUrl,
    Grid: gaugeGrid,
  },
  Funnel: {
    Option: funnelOption,
    Url: funnelUrl,
    Grid: funnelGrid,
  },
  Parallel: {
    Option: parallelOption,
    Url: parallelUrl,
    Grid: parallelGrid,
  },
  Pictorialbar: {
    Option: pictorialbarOption,
    Url: pictorialbarUrl,
    Grid: pictorialbarGrid,
  },
  Pie: {
    Option: pieOption,
    Url: pieUrl,
    Grid: pieGrid,
  },
  Radar: {
    Option: radarOption,
    Url: radarUrl,
    Grid: radarGrid,
  },
  Sankey: {
    Option: sankeyOption,
    Url: sankeyUrl,
    Grid: sankeyGrid,
  },
  Scatter: {
    Option: scatterOption,
    Url: scatterUrl,
    Grid: scatterGrid,
  },
  Sunburst: {
    Option: sunburstOption,
    Url: sunburstUrl,
    Grid: sunburstGrid,
  },
}

export default ChartData
export type ChartDataType = keyof typeof ChartData
