export default {
  data() {
    return {
      uuid: this.generateUUID(),
    };
  },

  props: {
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },

  computed: {
    computedRef() {
      return `bar-chart-${this.uuid}`;
    },

    dataAvailable() {
      return this.datasets != undefined;
    },
  },

  mounted() {
    this.generateChart();
  },

  methods: {
    generateUUID() {
      return Math.floor(Math.random() * 10000000000);
    },

    generateChart() {
      const ctx = this.$refs[this.computedRef];
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            y: {
              display: false,
            },
            x: {
              suggestedMin: 0,
              suggestedMax: 5,
            },
          },
          plugins: {
            legend: {
              position: "bottom",
            },
          },
          elements: {
            bar: {
              borderRadius: 10,
              backgroundColor: "blue",
            },
          },
        },
      });
    },
  },

  template: `<div class="canvas-container">
    <canvas v-if="datasets" v-bind:ref="computedRef"></canvas>  
  </div>`,
};
