import { PieOption } from "../ChartOptions/pieOption"

export const pieGrid = () => {
  const pieGrid = {
    columnDefs: [
      { headerName: "", field: "" },
      { headerName: "", field: "" },
      { headerName: "", field: "" },
      { headerName: "", field: "" },
    ],
    rowData: [{ 찬성: "", 반대: "", 모르겠다: "", 무응답: "" }],
  }

  PieOption.series.map((item) => {
    item.data.map((data) => {
      pieGrid.columnDefs.map((column) => {
        column.headerName = data.name
        column.field = data.name
      })
      Object.keys(pieGrid.rowData).map((item) => {
        item = String(data.value)
      })
    })
  })

  return pieGrid
}
