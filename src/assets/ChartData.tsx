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

import { BarOption } from "./ChartOptions/barOption"
import { LineOption } from "./ChartOptions/lineOption"
import { CandlestickOption } from "./ChartOptions/candlestickOption"
import { GaugeOption } from "./ChartOptions/gaugeOption"
import { FunnelOption } from "./ChartOptions/funnelOption"
import { ParallelOption } from "./ChartOptions/parallelOption"
import { PictorialBarOption } from "./ChartOptions/pictorialBarOption"
import { PieOption } from "./ChartOptions/pieOption"
import { RadarOption } from "./ChartOptions/radarOption"
import { SankeyOption } from "./ChartOptions/sankeyOption"
import { ScatterOption } from "./ChartOptions/scatterOption"
import { SunburstOption } from "./ChartOptions/sunburstOption"

import { barData } from "./GridOptions/barData"
import { lineData } from "./GridOptions/lineData"
import { candlestickData } from "./GridOptions/candlestickData"
import { gaugeData } from "./GridOptions/gaugeData"
import { funnelData } from "./GridOptions/funnelData"
import { parallelData } from "./GridOptions/parallelData"
import { pictorialbarData } from "./GridOptions/pictorialbarData"
import { pieData } from "./GridOptions/pieData"
import { radarData } from "./GridOptions/radarData"
import { sankeyData } from "./GridOptions/sankeyData"
import { scatterData } from "./GridOptions/scatterData"
import { sunburstData } from "./GridOptions/sunburstData"

const ChartData = {
  Bar: {
    Option: BarOption,
    Url: barUrl,
    Grid: barData,
    explanation: `Bar Chart는 표현 값에 비례하여 높이와 길이를 지는 직사각형 막대로 범주형 데이터를 표현하는 차트이다.
    막대는 수직이나 수평으로 그릴 수 있다.
    히스토그램은 공업 분야에서 품질 관리(QC)를 위한 도구 중 하나이다.`,
  },
  Line: {
    Option: LineOption,
    Url: lineUrl,
    Grid: lineData,
    explanation: `Line Chart는 수량을 점으로 표시하고 그 점들을 선분으로 이어 그린 그래프를 말한다.
    시간에 따라 뭔가가 지속적으로 변화하는 것을 기록할때 굉장히 유용하다.
    조사하지 않은 중간의 값도 대략 예측할 수 있다는 장점이 있다.`,
  },
  Candlestick: {
    Option: CandlestickOption,
    Url: candlestickUrl,
    Grid: candlestickData,
    explanation: `캔들스틱 차트 또는 봉차트는
    주식을 비롯한 유가증권과 파생상품,
    환율의 가격 움직임을 보여주는 금융 차트이다.
    각각의 "캔들스틱" 또는 "봉"은 일반적으로 "하루"의 가격 움직임을 나타내며,
    따라서 20일간의 거래를 보여주는 차트에는 20개의 캔들스틱이 있다.`,
  },
  Gauge: {
    Option: GaugeOption,
    Url: gaugeUrl,
    Grid: gaugeData,
    explanation: `과학 및 공학에서 게이지는 측정을하거나 특정 치수 정보를 표시하는 데 사용되는 장치이다.
    본래의 목적대로 특정 치수 정보를 표시하거나
    특정 목표의 달성율을 표현하는 용도로 응용해서 사용할 수 있다.`,
  },
  Funnel: {
    Option: FunnelOption,
    Url: funnelUrl,
    Grid: funnelData,
    explanation: `깔때기 형 차트는 판매 프로세스의 단계를 나타내고
    각 단계의 잠재적 수익을 나타내는 데 주로 사용되는 차트 유형이다.
    이 유형의 차트는 조직의 영업 프로세스에서 잠재적인 문제영역을 식별하는 데 유용 할 수 있다.`,
  },
  Parallel: {
    Option: ParallelOption,
    Url: parallelUrl,
    Grid: parallelData,
    explanation: `평행차트는 고차원 데이터 세트를 시각화하고 분석하는 일반적인 방법이다.
    이 시각화는 축이 특정 시점에 대응하지 않기 때문에
    자연 순서가 없는 데이터에 적용된다는 점을 제외하고는
    시계열 시각화와 밀접한 관련이 있어 다른 축 배열이 관심의 대상이 될 수 있다.`,
  },
  Pictorialbar: {
    Option: PictorialBarOption,
    Url: pictorialbarUrl,
    Grid: pictorialbarData,
    explanation: `그림 막대 차트는 디자이너가 인포그래픽에서 사용하는 막대 차트를 시각적으로 표현한 것이다.
    개체 길이를 늘리거나 크기를 조정하여 막대 대신 아이콘 또는 그림을 사용한다.`,
  },
  Pie: {
    Option: PieOption,
    Url: pieUrl,
    Grid: pieData,
    explanation: ``,
  },
  Radar: {
    Option: RadarOption,
    Url: radarUrl,
    Grid: radarData,
    explanation: `어떤 측정 목표에 대한 평가항목이 여러 개일 때 항목 수에 따라 원을 같은 간격으로 나누고,
    중심으로부터 일정 간격으로 동심으로 척도를 재는 칸을 나누어
    각 평가항목의 정량화된 점수에 따라 그 위치에 점을 찍고
    평가항목간 점을 이어 선으로 만들어 항목 간 균형을 한눈에 볼 수 있도록 해주는 도표이다.`,
  },
  Sankey: {
    Option: SankeyOption,
    Url: sankeyUrl,
    Grid: sankeyData,
    explanation: `흐름 다이어그램의 한 종류로서
    그 화살표의 너비로 흐름의 양을 비율적으로 보여준다.
    주로 어떤 프로세스에서 에너지, 연료, 비용의 움직임을 시각화하는 데에 사용된다.`,
  },
  Scatter: {
    Option: ScatterOption,
    Url: scatterUrl,
    Grid: scatterData,
    explanation: `Scatter Chart는 2개의 연속형 변수 간의 관계를 보기 위하여
    직교좌표의 평면에 관측점을 직어 만든 통계 그래프이다.
    이를 통해 두 변수 사이의 관계를 알 수 있다.`,
  },
  Sunburst: {
    Option: SunburstOption,
    Url: sunburstUrl,
    Grid: sunburstData,
    explanation: `선버스트 차트는 계층 구조 데이터를 표시하는 데 적합하다.
    하나의 고리 또는 원이 계층 구조의 각 수준을 나타내며
    가장 안쪽에 있는 원이 계층 구조의 가장 높은 수준을 나타낸다.
    선버스트 차트는 하나의 고리가 어떤 요소로 구성되어 있는가를 보여주는 데 가장 효과적입니다. `,
  },
}

export default ChartData
export type ChartDataType = keyof typeof ChartData
