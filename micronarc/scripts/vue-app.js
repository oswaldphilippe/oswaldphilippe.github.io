import App from "./components/app.js";
import ContentWrapper from "./components/content-wrapper.js";
import ComparisonRadarChart from "./components/comparison-radar-chart.js";
import ComparisonBarChart from "./components/comparison-bar-chart.js";
import CriteriaComparison from "./components/criteria-comparison.js";
import DimensionAverageComparison from "./components/dimension-average-comparison.js";

const app = Vue.createApp({});

app.component("app", App);
app.component("content-wrapper", ContentWrapper);
app.component("comparison-radar-chart", ComparisonRadarChart);
app.component("comparison-bar-chart", ComparisonBarChart);
app.component("criteria-comparison", CriteriaComparison);
app.component("dimension-average-comparison", DimensionAverageComparison);

app.mount("#app");
