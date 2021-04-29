export const RadarOption = {
  tooltip: {},
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["예산할당", "실제예산"],
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 3,
        padding: [3, 5],
      },
    },
    indicator: [
      { name: "매상", max: 6500 },
      { name: "관리", max: 16000 },
      { name: "정보기술", max: 30000 },
      { name: "고객 서비스", max: 38000 },
      { name: "개발", max: 52000 },
      { name: "마케팅", max: 25000 },
    ],
  },
  series: [
    {
      name: "预算 vs 开销（Budget vs spending）",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: "예산할당",
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: "실제예산",
        },
      ],
    },
  ],
}
