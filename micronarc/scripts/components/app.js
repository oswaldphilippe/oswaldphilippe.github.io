export default {
  data() {
    return {
      questionGroups: questions,
      participants: participants,
    };
  },

  computed: {
    labels() {
      let labels = [];
      for (let groupName in this.questionGroups) {
        let questionGroup = this.questionGroups[groupName];
        console.log(questionGroup);
        labels.push(`${questionGroup.name} (${questionGroup.code})`);
      }
      return labels;
    },
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

    hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    },
  },

  template: `
  <div>
    <dimension-average-comparison :participants="participants" :labels="labels"></dimension-average-comparison>
  </div>
  <div v-for="questionGroup, groupCode in questionGroups" :key="groupCode" class="shadow rounded overflow-hidden p-4 mb-6">
  <div class="text-xl font-black mb-6">{{ questionGroup.name }} ({{ groupCode }})</div>
  <div v-for="criteria, criteriaCode  in questionGroup.questions" :key="criteriaCode" class="rounded overflow-hidden">
    <div class="font-bold bg-slate-200 p-3">{{ criteria.name }} ({{ criteriaCode }})</div>
    <div class="shadow-lg answers-container flex items-stretch border mx-1" style="margin-left:6px;margin-right:10px;">
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
