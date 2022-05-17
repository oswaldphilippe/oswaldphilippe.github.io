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
      // Lower opacity as all data will overlap
      for (let i = 0; i < this.datasets.length; i++) {
        let ds = this.datasets[i];
        let color = ds.backgroundColor;
        ds.backgroundColor = this.hexToRGB(ds.backgroundColor, 0.7);
        ds.borderColor = color;
        ds.pointBackgroundColor = color;
      }
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
              align: "start",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                boxWidth: 6,
                font: {
                  size: 16,
                },
              },
            },
          },
          datasets: {
            bar: {
              barThickness: "flex",
              barPercentage: 0.6,
              categoryPercentage: 0.95,
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

    hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    },
  },

  template: `<div class="canvas-container">
    <canvas v-if="datasets" v-bind:ref="computedRef"></canvas>  
  </div>`,
};
