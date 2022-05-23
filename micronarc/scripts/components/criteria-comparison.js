import DatasetMixin from "../mixins/dataset-mixin.js";

export default {
  data() {
    return {
      datasets: null,
    };
  },

  mixins: [DatasetMixin],

  props: {
    random: {
      type: Boolean,
      required: false,
    },
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
    let datasets = this.generateParticipantsDatasets();
    if (this.random) {
      datasets = this.randomizeDatasets(datasets);
    }
    this.datasets = datasets;
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

    randomizeDatasets(datasets) {
      let anonym_labels = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
      anonym_labels = anonym_labels.slice(0, datasets.length);
      let anonym_colors = datasets.map((value) => value.backgroundColor);

      let shuffledDatasets = datasets
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      shuffledDatasets.forEach((element, index) => {
        element.label = anonym_labels[index];
        anonym_colors.push(element.backgroundColor);
      });

      shuffledDatasets.forEach((element, index) => {
        element.backgroundColor = anonym_colors[index];
        anonym_colors.push(element.backgroundColor);
      });

      return shuffledDatasets;
    },
  },

  template: `
    <comparison-bar-chart :labels="[criteria]" :datasets="datasets" v-if="datasets"></comparison-bar-chart>
  `,
};
