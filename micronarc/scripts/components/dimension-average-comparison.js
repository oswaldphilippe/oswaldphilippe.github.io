export default {
  data() {
    return {
      datasets: null,
    };
  },

  props: {
    participants: {
      type: Object,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.datasets = this.generateDatasets();
  },

  methods: {
    generateDatasets() {
      const generatedDatasets = [];
      const parsedKeys = [];

      for (let participantKey in this.participants) {
        if (!parsedKeys.find((k) => k == participantKey)) {
          const participant = this.participants[participantKey];
          const dataset = {};

          dataset.label = participant.company_name;
          let data = [];
          for (let dimension in participant.dimensions) {
            data.push(participant.dimensions[dimension].score);
          }
          dataset.data = data;
          dataset.backgroundColor = participant.color;

          generatedDatasets.push(dataset);
          parsedKeys.push(participantKey);
        }
      }

      return generatedDatasets;
    },
  },

  template: `
    <comparison-radar-chart v-if="datasets" :datasets="datasets" :labels="labels" class="h-screen"></comparison-radar-chart>
  `,
};
