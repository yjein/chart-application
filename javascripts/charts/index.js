const options = {
  bar: {
    title: "Bar Chart",
    contents: `Bar Chart는 표현 값에 비례하여 높이와 길이를 지는 직사각형 막대로 범주형 데이터를 표현하는 차트이다.
    막대는 수직이나 수평으로 그릴 수 있다.
    히스토그램은 공업 분야에서 품질 관리(QC)를 위한 도구 중 하나이다.`,
    image_url: "../assets/charts/bar.png",
    gridOption: bar_grid_opt,
    option: bar,
  },

  line: {
    title: "Line Chart",
    contents: `Line Chart는 수량을 점으로 표시하고 그 점들을 선분으로 이어 그린 그래프를 말한다.
    시간에 따라 뭔가가 지속적으로 변화하는 것을 기록할때 굉장히 유용하다.
    조사하지 않은 중간의 값도 대략 예측할 수 있다는 장점이 있다.`,
    image_url: "../assets/charts/line.png",
    option: line,
  },

  pie: {
    title: "Pie Chart",
    contents: `Pie Chart는 전체에 대한 각 부분의 비율을 부채꼴 모양으로 나타낸 그래프이다.
    각 부채꼴의 중심각이 전체에서 차지하는 비율을 나타내며,
    비율을 한눈에 볼 수 있다는 장점이 있다.`,
    image_url: "../assets/charts/pie.png",
    option: pie,
  },

  scatter: {
    title: "Scatter Chart",
    contents: `Scatter Chart는 2개의 연속형 변수 간의 관계를 보기 위하여
    직교좌표의 평면에 관측점을 직어 만든 통계 그래프이다.
    이를 통해 두 변수 사이의 관계를 알 수 있다.`,
    image_url: "../assets/charts/scatter.png",
    option: scatter,
  },

  gauge: {
    title: "Gauge Chart",
    contents: `과학 및 공학에서 게이지는 측정을하거나 특정 치수 정보를 표시하는 데 사용되는 장치이다.
    본래의 목적대로 특정 치수 정보를 표시하거나
    특정 목표의 달성율을 표현하는 용도로 응용해서 사용할 수 있다.`,
    image_url: "../assets/charts/gauge.png",
    option: gauge,
  },

  radar: {
    title: "Radar Chart",
    contents: `어떤 측정 목표에 대한 평가항목이 여러 개일 때 항목 수에 따라 원을 같은 간격으로 나누고,
    중심으로부터 일정 간격으로 동심으로 척도를 재는 칸을 나누어
    각 평가항목의 정량화된 점수에 따라 그 위치에 점을 찍고
    평가항목간 점을 이어 선으로 만들어 항목 간 균형을 한눈에 볼 수 있도록 해주는 도표이다.`,
    image_url: "../assets/charts/radar.png",
    option: radar,
  },

  sankey: {
    title: "Sankey Chart",
    contents: `흐름 다이어그램의 한 종류로서
    그 화살표의 너비로 흐름의 양을 비율적으로 보여준다.
    주로 어떤 프로세스에서 에너지, 연료, 비용의 움직임을 시각화하는 데에 사용된다.`,
    image_url: "../assets/charts/sankey.png",
    option: sankey,
  },

  funnel: {
    title: "Funnel Chart",
    contents: `깔때기 형 차트는 판매 프로세스의 단계를 나타내고
    각 단계의 잠재적 수익을 나타내는 데 주로 사용되는 차트 유형이다.
    이 유형의 차트는 조직의 영업 프로세스에서 잠재적인 문제영역을 식별하는 데 유용 할 수 있다.`,
    image_url: "../assets/charts/funnel.png",
    option: funnel,
  },

  candlestick: {
    title: "Candlestick Chart",
    contents: `캔들스틱 차트 또는 봉차트는
    주식을 비롯한 유가증권과 파생상품,
    환율의 가격 움직임을 보여주는 금융 차트이다.
    각각의 "캔들스틱" 또는 "봉"은 일반적으로 "하루"의 가격 움직임을 나타내며,
    따라서 20일간의 거래를 보여주는 차트에는 20개의 캔들스틱이 있다.`,
    image_url: "../assets/charts/candlestick.png",
    option: candlestick,
  },

  sunburst: {
    title: "Sunburst Chart",
    contents: `선버스트 차트는 계층 구조 데이터를 표시하는 데 적합하다.
    하나의 고리 또는 원이 계층 구조의 각 수준을 나타내며
    가장 안쪽에 있는 원이 계층 구조의 가장 높은 수준을 나타낸다.
    선버스트 차트는 하나의 고리가 어떤 요소로 구성되어 있는가를 보여주는 데 가장 효과적입니다. `,
    image_url: "../assets/charts/sunburst.png",
    option: sunburst,
  },

  pictorialbar: {
    title: "PictorialBar Chart",
    contents: `그림 막대 차트는 디자이너가 인포그래픽에서 사용하는 막대 차트를 시각적으로 표현한 것이다.
      개체 길이를 늘리거나 크기를 조정하여 막대 대신 아이콘 또는 그림을 사용한다.`,
    image_url: "../assets/charts/pictorialbar.png",
    option: pictorialbar,
  },

  parallel: {
    title: "Parallel Chart",
    contents: `평행차트는 고차원 데이터 세트를 시각화하고 분석하는 일반적인 방법이다.
    이 시각화는 축이 특정 시점에 대응하지 않기 때문에
    자연 순서가 없는 데이터에 적용된다는 점을 제외하고는
    시계열 시각화와 밀접한 관련이 있어 다른 축 배열이 관심의 대상이 될 수 있다.
    `,
    image_url: "../assets/charts/parallel.png",
    option: parallel,
  },
}
