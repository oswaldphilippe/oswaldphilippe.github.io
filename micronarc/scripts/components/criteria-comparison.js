export default {
  data() {
    return {
      datasets: null,
    };
  },

  props: {
    criteria: {
      type: String,
      required: true,
    },
    questionGroups: {
      type: Object,
      required: true,
    },
    participants: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dimensionCode() {
      return this.criteria.substring(0, 2);
    },
  },

  mounted() {
    this.datasets = this.generateDatasets();
  },

  methods: {
    generateDatasets() {
      let intelli = participants;
      const generatedDatasets = [];
      const parsedKeys = [];

      for (let participantKey in this.participants) {
        if (!parsedKeys.find((k) => k == participantKey)) {
          const participant = this.participants[participantKey];
          const dataset = {};
          dataset.label = participant.company_name;
          dataset.data = [participant.dimensions[this.dimensionCode].criterias[this.criteria]];
          dataset.backgroundColor = participant.color;

          generatedDatasets.push(dataset);
          parsedKeys.push(participantKey);
        }
      }

      return generatedDatasets;
    },
  },

  template: `
    <comparison-bar-chart :labels="[criteria]" :datasets="datasets" v-if="datasets"></comparison-bar-chart>
  `,
};
