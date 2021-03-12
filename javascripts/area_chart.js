ZC.LICENSE = [
  "569d52cefae586f634c54f86dc99e6a9",
  "b55b025e438fa8a98e32482b5f768ff5",
] // full ZingChart schema can be found here:
// https://www.zingchart.com/docs/api/json-configuration/
// Chart Data
let warrants = [3, 3, 4, 6, 4, 3, 3, 5, 6, 7, 9, 10]
let orders = [3, 3, 4, 7, 4, 3, 3, 7, 8, 9, 11, 12]
let subpoenas = [3, 3, 4, 6, 4, 3, 3, 9, 10, 12, 13, 14]
let usRequests = [3, 3, 4, 6, 4, 3, 3, 10, 11, 13, 14, 15]
let governmentRequests = [3, 3, 4, 6, 4, 3, 3, 11, 12, 14, 15, 20]

// Chart Configuration
let chartConfig = {
  type: "area",
  globals: {
    fontFamily: "Poppins",
    fontColor: "#333",
  },
  title: {
    text: "Government Requests by Volume",
    align: "center",
    padding: "5px",
  },
  subtitle: {
    text:
      "This area graph shows the total number of requests received over time, broken down by request type",
    align: "center",
    fontColor: "#505050",
    padding: "10px",
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    layout: "3x2",
    border: "none",
    item: {
      fontSize: "18px",
    },
    marker: {
      type: "circle",
    },
  },
  tooltip: {
    callout: true,
    text: "%t:<br>%v Requests received between<br>July 2020 & June 2021",
    backgroundColor: "#F7F9FA",
    fontColor: "#505050",
    fontSize: "18px",
    padding: "20px 35px",
    borderRadius: "4px",
  },
  plot: {
    aspect: "spline",
  },
  scaleX: {
    labels: [
      "Jul 20",
      "Aug 20",
      "Sep 20",
      "Oct 20",
      "Nov 20",
      "Dec 20",
      "Jan 21",
      "Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21",
    ],
  },
  scaleY: {
    values: "0:16:2",
  },
  series: [
    {
      values: warrants,
      text: "Arrest Warrants",
      zIndex: 10,
      alphaArea: 1,
      lineColor: "#ffffff",
      lineWidth: "3px",
      backgroundColor: "#62E9D8",
      marker: {
        size: "0px",
      },
      hoverMarker: {
        size: "10px",
        backgroundColor: "#fff",
        borderColor: "#eee",
      },
    },
    {
      values: orders,
      text: " Court Orders",
      zIndex: 9,
      alphaArea: 1,
      lineColor: "#ffffff",
      backgroundColor: "#70DE99",
      marker: {
        size: "0px",
      },
      hoverMarker: {
        size: "10px",
        backgroundColor: "#fff",
        borderColor: "#eee",
      },
    },
    {
      values: subpoenas,
      text: "Subpoenas",
      zIndex: 8,
      alphaArea: 1,
      lineColor: "#ffffff",
      backgroundColor: "#B2DC93",
      marker: {
        size: "0px",
      },
      hoverMarker: {
        size: "10px",
        backgroundColor: "#fff",
        borderColor: "#eee",
      },
    },
    {
      values: usRequests,
      text: "US Requests",
      zIndex: 7,
      alphaArea: 1,
      lineColor: "#ffffff",
      backgroundColor: "#FFE295",
      marker: {
        size: "0px",
      },
      hoverMarker: {
        size: "10px",
        backgroundColor: "#fff",
        borderColor: "#eee",
      },
    },
    {
      values: governmentRequests,
      text: "Government Requests",
      zIndex: 6,
      alphaArea: 1,
      lineColor: "#ffffff",
      backgroundColor: "#FF9C85",
      marker: {
        size: "0px",
      },
      hoverMarker: {
        size: "10px",
        backgroundColor: "#fff",
        borderColor: "#eee",
      },
    },
  ],
}

// Render Method
zingchart.render({
  id: "myChart",
  data: chartConfig,
  height: "100%",
  width: "100%",
})
