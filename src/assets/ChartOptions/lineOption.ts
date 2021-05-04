import { rowData, columnData } from "../../Util/ChangeLineData"


export const LineOption = {
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
    data: rowData,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: columnData,
      type: "line",
      smooth: true,
      lineStyle: {
        width: 5,
      },
    },
  ],
}
