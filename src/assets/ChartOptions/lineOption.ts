const LineOption = {
  title: {
    left: "center",
    text: "주간 신규 코로나 바이러스 확진자수",
  },
  tooltip: {},
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  xAxis: {
    type: "category",
    data: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [282, 347, 406, 451, 557, 543, 443],
      type: "line",
      smooth: true,
      lineStyle: {
        width: 5,
      },
    },
  ],
}

export default LineOption
