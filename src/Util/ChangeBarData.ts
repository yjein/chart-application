import { barData } from "../assets/ChartDatas/barData"
import { type } from "../assets/ChartData"

const ChangeBarData = (input: type) => {
  const dataset = {
    source: [["product"]],
  }

  input.rowData.forEach((v) => dataset.source[0].push(v.year))
  input.columnDefs.forEach((v, i) => {
    if (i === 0) return
    const newArr = new Array(v.headerName)
    input.rowData.forEach((va) => {
      const rowValues = Object.entries(va).find(([key]) => key === v.field)
      if (!rowValues) return
      newArr.push(rowValues[1])
    })
    dataset.source.push(newArr)
  })
  return dataset
}

export const changeBarData = ChangeBarData(barData)
