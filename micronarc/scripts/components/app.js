export default {
  data() {
    return {
      questionGroups: questions,
      participants: participants,
    };
  },

  beforeMount() {
    this.addColorsToParticipants();
  },

  methods: {
    addColorsToParticipants(staticParticipantsColors = {}) {
      const usedColors = new Set();
      const DEFAULT_COLORS = ["#2F80ED", "#9B51E0", "#828282", "#f53794", "#537bc4", "#acc236", "#166a8f", "#00a950", "#58595b", "#8549ba", "#f67019", "#A288E3", "#CA3C25", "#FFBF00"];
      let color;
      let cursorIndex = 0;

      for (let participantKey in this.participants) {
        let participant = this.participants[participantKey];

        if (!staticParticipantsColors.hasOwnProperty(participantKey)) {
          color = DEFAULT_COLORS[cursorIndex];

          while (usedColors.has(color)) {
            cursorIndex++;
            color = DEFAULT_COLORS[cursorIndex];
          }
        } else {
          color = staticParticipantsColors[participantKey];
        }

        participant.color = color;
        usedColors.add(color);
      }
    },
  },

  template: `
  <div v-for="questionGroup, groupCode in questionGroups" :key="groupCode" class="shadow rounded overflow-hidden p-4 mb-6">
  <div class="text-xl font-black mb-6">{{ questionGroup.name }} ({{ groupCode }})</div>
  <div v-for="criteria, criteriaCode  in questionGroup.questions" :key="criteriaCode" class="rounded overflow-hidden">
    <div class="font-bold bg-slate-200 p-3">{{ criteria.name }} ({{ criteriaCode }})</div>
    <div class="flex items-stretch mb-4 border">
      <div v-for="answerObject, index in criteria.answers" :key="index" class="basis-0 flex-grow border-x">
        <template v-for="text, value in answerObject" :key="value">
          <div class="flex flex-col justify-items-stretch">
            <div class="p-3 border-y">{{ value }}</div>
            <div class="p-3">{{ text }}</div>
          </div>
        </template>
      </div>
    </div>
    <criteria-comparison :criteria="criteriaCode" :participants="participants" :question-groups="questionGroups"></criteria-comparison>
  </div>
</div>
    <content-wrapper>

    </content-wrapper>`,
};
