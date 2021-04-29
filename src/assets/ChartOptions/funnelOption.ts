const FunnelOption = {
  title: {
    text: "Marketing",
    subtext: "Funnel",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}%",
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
  legend: {
    data: ["인식", "관심", "고려", "의지", "평가", "구매"],
  },
  series: [
    {
      name: "예상",
      type: "funnel",
      left: "10%",
      width: "80%",
      label: {
        formatter: "{b}",
      },
      labelLine: {
        show: false,
      },
      itemStyle: {
        opacity: 0.7,
      },
      emphasis: {
        label: {
          position: "inside",
          formatter: "{b}预期: {c}%",
        },
      },
      data: [
        { value: 60, name: "고려" },
        { value: 40, name: "의지" },
        { value: 20, name: "구매" },
        { value: 80, name: "관심" },
        { value: 100, name: "인식" },
      ],
    },
    {
      name: "실제",
      type: "funnel",
      left: "10%",
      width: "80%",
      maxSize: "80%",
      label: {
        position: "inside",
        formatter: "{c}%",
        color: "#fff",
      },
      itemStyle: {
        opacity: 0.5,
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: {
        label: {
          position: "inside",
          formatter: "{c}%",
        },
      },
      data: [
        { value: 30, name: "고려" },
        { value: 10, name: "의지" },
        { value: 5, name: "구매" },
        { value: 50, name: "관심" },
        { value: 80, name: "인식" },
      ],
      // Ensure outer shape will not be over inner shape when hover.
      z: 100,
    },
  ],
}

export default FunnelOption
