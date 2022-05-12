import App from "./components/app.js";
import ContentWrapper from "./components/content-wrapper.js";
import ComparisonBarChart from "./components/comparison-bar-chart.js";
import CriteriaComparison from "./components/criteria-comparison.js";

const app = Vue.createApp({});

app.component("app", App);
app.component("content-wrapper", ContentWrapper);
app.component("comparison-bar-chart", ComparisonBarChart);
app.component("criteria-comparison", CriteriaComparison);

app.mount("#app");
