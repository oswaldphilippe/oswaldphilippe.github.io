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

    getMaturityLevelDescriptionFromScore(score) {
      if (score >= 0 && score < 1.25) {
        return "Initiée";
      }
      if (score >= 1.25 && score < 2.5) {
        return "Convaincue";
      }
      if (score >= 2.5 && score < 3.5) {
        return "Engagée";
      }
      if (score >= 3.5 && score < 4.5) {
        return "Portée par le numérique";
      }
      if (score >= 4 && score <= 5) {
        return "Référent";
      }
    },

    makeDataset(participant) {
      const dataset = {};
      let data = [];

      dataset.label = `${participant.company_name} (${this.getMaturityLevelDescriptionFromScore(participant.maturity_level)})`;

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
