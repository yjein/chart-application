import {
  ChangeLineRowData,
  ChangeLineColumnData,
} from "../../Util/ChangeLineData"
import { lineData } from "../ChartDatas/lineData"

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
    data: ChangeLineRowData(lineData),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: ChangeLineColumnData(lineData),
      type: "line",
      smooth: true,
      lineStyle: {
        width: 5,
      },
    },
  ],
}
