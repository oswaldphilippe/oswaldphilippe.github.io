export default {
  data() {
    return {
      uuid: this.generateUUID(),
    };
  },

  props: {
    datasets: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
  },

  computed: {
    computedRef() {
      return `radar-chart-${this.uuid}`;
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
        ds.backgroundColor = this.hexToRGB(ds.backgroundColor, 0.2);
        ds.borderColor = color;
        ds.pointBackgroundColor = color;
      }
      const ctx = this.$refs[this.computedRef];
      new Chart(ctx, {
        type: "radar",
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 4,
            },
            line: {
              borderWidth: 1,
            },
          },
          scales: {
            r: {
              pointLabels: {
                font: {
                  size: 15,
                },
              },
              min: 0,
              max: 5,
            },
          },
          plugins: {
            legend: {
              position: "top",
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
          interaction: {
            mode: "index",
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
    <canvas v-bind:ref="computedRef"></canvas>  
  </div>`,
};
