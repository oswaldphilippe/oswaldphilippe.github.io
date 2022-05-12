export default {
  data() {
    return {
      uuid: this.generateUUID(),
      dummySets: [
        { label: "dataset1", data: [1] },
        { label: "dataset2", data: [2] },
      ],
    };
  },

  props: {
    labels: {
      type: String,
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
              barPercentage: 0.1,
            },
          },
        },
      });
    },

    // watch: {
    //   datasets: function (val) {
    //     this.generateChart();
    //   },
    // },
  },

  template: `<div class="canvas-container">
    <canvas v-if="datasets" v-bind:ref="computedRef"></canvas>  
  </div>`,
};
