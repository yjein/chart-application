
export const rowData: Array<string> = [];
export const columnData: Array<number> = [];

const ChangeLineData = () => {
  lineData.columnDefs.map((v) => {
    rowData.push(v.headerName);
    lineData.rowData.forEach((va) => {
      const colValues = Object.entries(va).find(([key]) => key === v.field);
      if (!colValues) return;
      columnData.push(colValues[1]);
    });
  });
};

ChangeLineData();

