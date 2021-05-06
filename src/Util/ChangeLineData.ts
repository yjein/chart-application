
export const ChangeLineRowData = (lineData: {
  columnDefs: {
    headerName: string
    field: string
  }[]
  rowData: {
    mon: number
    tue: number
    wed: number
    thu: number
    fri: number
    sat: number
    sun: number
  }[]
}) => {
  const rowData: Array<string> = []

  lineData.columnDefs.forEach((v) => {
    rowData.push(v.headerName)
  })

  return rowData
}
export const ChangeLineColumnData = (lineData: {
  columnDefs: {
    headerName: string
    field: string
  }[]
  rowData: {
    mon: number
    tue: number
    wed: number
    thu: number
    fri: number
    sat: number
    sun: number
  }[]
}) => {
  const columnData: Array<number> = []

  lineData.columnDefs.forEach((v) => {
    lineData.rowData.forEach((va) => {
      const colValues = Object.entries(va).find(([key]) => key === v.field)
      if (!colValues) return
      columnData.push(colValues[1])
    })
  })

  return columnData
}
