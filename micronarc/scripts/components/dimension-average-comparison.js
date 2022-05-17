import DatasetMixin from "../mixins/dataset-mixin.js";

export default {
  data() {
    return {
      datasets: null,
    };
  },

  mixins: [DatasetMixin],

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
    this.datasets = this.generateParticipantsDatasets();
  },

  methods: {
    generateParticipantsDatasets() {
      return this.generateDatasets(this.participants, this.makeDataset);
    },

    makeDataset(participant) {
      const dataset = {};
      let data = [];

      dataset.label = participant.company_name;

      for (let dimension in participant.dimensions) {
        data.push(participant.dimensions[dimension].score);
      }

      dataset.data = data;
      dataset.backgroundColor = participant.color;

      return dataset;
    },
  },

  template: `
    <comparison-radar-chart v-if="datasets" :datasets="datasets" :labels="labels"></comparison-radar-chart>
  `,
};
