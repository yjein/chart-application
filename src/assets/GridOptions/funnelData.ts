export const funnelData = {
  columnDefs: [
    { headerName: "인식", field: "인식" },
    { headerName: "관심", field: "관심" },
    { headerName: "고려", field: "고려" },
    { headerName: "의지", field: "의지" },
    { headerName: "구매", field: "구매" },
  ],
  rowData: [
    {
      인식: "100% - 예상",
      관심: "80% - 예상",
      고려: "60% - 예상",
      의지: "40% - 예상",
      구매: "20% - 예상",
    },
    {
      인식: "80% - 실제",
      관심: "50% - 실제",
      고려: "30% - 실제",
      의지: "10% - 실제",
      구매: "5% - 실제",
    },
  ],
}
