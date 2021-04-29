export const PieOption = {
  title: {
    left: "center",
    text: "투표 결과",
  },
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
    top: "bottom",
  },
  series: [
    {
      name: "투표 결과",
      type: "pie",
      radius: [50, 170],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 30, name: "찬성" },
        { value: 20, name: "반대" },
        { value: 15, name: "모르겠다" },
        { value: 10, name: "무응답" },
      ],
    },
  ],
}
