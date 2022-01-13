import { RootColors } from "./colors";

const colors = RootColors();
const dashRoot = "/";
export const apiUrl = "http://localhost:9000";
export const sidebarItems = [
  {
    id: "brand",
    icon: "iconsminds-air-balloon-1",
    label: "Dashboard",
    to: `${dashRoot}/brand`,
  },
  {
    id: "influencers",
    icon: "iconsminds-three-arrow-fork",
    label: "Influencers",
    to: `${dashRoot}/influencers`,
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "Brands",
    to: `${dashRoot}/blank-page`,
  },
];
export const localeOptions = [
  { id: "en", name: "English" },
  { id: "fr", name: "French" },
  { id: "de", name: "German" },
];
export const areaChartData = {
  labels: ["0", "2", "4", "6", "8", "10", "12"],
  datasets: [
    {
      label: "",
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor1_10,
    },
  ],
};

export const chartTooltip = {
  backgroundColor: RootColors().foregroundColor,
  titleFontColor: RootColors().primaryColor,
  borderColor: RootColors().separatorColor,
  borderWidth: 0.5,
  bodyFontColor: RootColors().primaryColor,
  bodySpacing: 10,
  xPadding: 15,
  yPadding: 15,
  cornerRadius: 0.15,
};
export const circleAreaData = {
  labels: ["Sales", "Sold", "Waiting"],
  datasets: [
    {
      data: [80, 90, 70],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
    },
  ],
};
export const circleAreaOptions = {
  legend: {
    position: "bottom",
    labels: {
      padding: 30,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      display: false,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
  },
  tooltips: chartTooltip,
};
export const areaChartOptions = {
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: chartTooltip,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
          lineWidth: 1,
          color: "rgba(0,0,0,0.1)",
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          min: 50,
          max: 70,
          padding: 20,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};
