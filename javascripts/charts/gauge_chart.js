const gauge = {
  tooltip: {},
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#464646",
        },
      },
      axisLine: {
        lineStyle: {
          width: 40,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: [
        {
          value: 20,
          name: "Perfect",
          title: {
            offsetCenter: ["0%", "-30%"],
          },
          detail: {
            offsetCenter: ["0%", "-20%"],
          },
        },
        {
          value: 40,
          name: "Good",
          title: {
            offsetCenter: ["0%", "0%"],
          },
          detail: {
            offsetCenter: ["0%", "10%"],
          },
        },
        {
          value: 60,
          name: "Commonly",
          title: {
            offsetCenter: ["0%", "30%"],
          },
          detail: {
            offsetCenter: ["0%", "40%"],
          },
        },
      ],
      title: {
        fontSize: 14,
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: "auto",
        borderColor: "auto",
        borderRadius: 20,
        borderWidth: 1,
        formatter: "{value}%",
      },
    },
  ],
}
