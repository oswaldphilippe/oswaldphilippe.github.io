const { createApp } = Vue;

createApp({
  data() {
    return {
      participants: participants,
      questionGroups: questions,
    };
  },
}).mount("#app");
