export default {
  methods: {
    generateDatasets(items, makeDataset) {
      const generatedDatasets = [];
      const parsedKeys = [];

      for (let itemKey in items) {
        if (!parsedKeys.find((k) => k == itemKey)) {
          const item = items[itemKey];
          const dataset = makeDataset(item);
          generatedDatasets.push(dataset);
          parsedKeys.push(itemKey);
        }
      }

      return generatedDatasets;
    },
  },
};
