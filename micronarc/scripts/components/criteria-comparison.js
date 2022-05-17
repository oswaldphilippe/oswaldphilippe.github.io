import DatasetMixin from "../mixins/dataset-mixin.js";

export default {
  data() {
    return {
      datasets: null,
    };
  },

  mixins: [DatasetMixin],

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
    this.datasets = this.generateParticipantsDatasets();
  },

  methods: {
    generateParticipantsDatasets() {
      return this.generateDatasets(this.participants, this.makeDataset);
    },

    makeDataset(participant) {
      const dataset = {};

      dataset.label = participant.company_name;
      dataset.data = [participant.dimensions[this.dimensionCode].criterias[this.criteria]];
      dataset.backgroundColor = participant.color;

      return dataset;
    },
  },

  template: `
    <comparison-bar-chart :labels="[criteria]" :datasets="datasets" v-if="datasets"></comparison-bar-chart>
  `,
};
