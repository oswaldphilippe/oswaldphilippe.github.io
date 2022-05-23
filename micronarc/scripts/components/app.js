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
        labels.push(`${questionGroup.name} (${questionGroup.code})`);
      }
      return labels;
    },
  },

  beforeMount() {
    const participantsColors = {
      "FELCO SA": "#00BC62",
      "Maturité digitale globale": "#080036",
      "NID SA": "#D20000",
      "HL-Technology SA": "#FF822C",
      "Ressorts Industriels SA": "#FFC700",
      "FAJI SA": "#A288E3",
      "Sored SA": "#319FFF",
      Medtronic: "#4808D1",
    };
    this.addColorsToParticipants(participantsColors);
  },

  methods: {
    addColorsToParticipants(staticParticipantsColors = {}) {
      const usedColors = new Set();
      const DEFAULT_COLORS = [
        "#D20000",
        "#FF822C",
        "#FFC700",
        "#00BC62",
        "#319FFF",
        "#4808D1",
        "#A647D2",
        "#2F80ED",
        "#9B51E0",
        "#828282",
        "#f53794",
        "#537bc4",
        "#acc236",
        "#166a8f",
        "#00a950",
        "#58595b",
        "#8549ba",
        "#f67019",
        "#A288E3",
        "#CA3C25",
        "#FFBF00",
      ];
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
<content-wrapper>
  <div>
    <h2 class="font-bold text-2xl mb-4">Moyenne de maturité digitale par dimension</h2>
    <hr class="my-8" />
    <div class="flex justify-items-stretch w-100">
      <dimension-average-comparison :participants="participants" :labels="labels" class="mb-8 basis-0 grow h-screen" style="width: 65%"></dimension-average-comparison>
      <div class="pl-4 self-center hidden lg:block" style="width: 30%">
        <div v-for="questionGroup, index in questionGroups" :key="questionGroup.code">
          <div class="font-bold">{{ questionGroup.name }}</div>
          <div class="text-gray-500">{{ questionGroup.description }}</div>
          <hr class="my-3" />
        </div>
      </div>
    </div>
  </div>
  <h2 class="font-bold text-2xl mb-4">Détail des dimensions</h2>
  <hr class="my-8" />
  <div v-for="questionGroup, groupCode in questionGroups" :key="groupCode" class="shadow rounded overflow-hidden px-0 lg:px-20 py-0 lg:py-11 mb-11 bg-white">
    <div class="text-2xl mb-8" style="margin-left: 6px; margin-right: 10px">{{ questionGroup.name }} ({{ groupCode }})</div>
    <div v-for="criteria, criteriaCode  in questionGroup.questions" :key="criteriaCode" class="rounded overflow-hidden mb-11">
      <div class="font-bold bg-slate-200 p-3" style="margin-left: 6px; margin-right: 10px">{{ criteria.name }} ({{ criteriaCode }})</div>
      <div class="shadow-lg answers-container flex items-stretch border mx-1" style="margin-left: 6px; margin-right: 10px">
        <div v-for="answerObject, index in criteria.answers" :key="index" class="basis-0 flex-grow border-x">
          <template v-for="text, value in answerObject" :key="value">
            <div class="flex flex-col justify-items-stretch">
              <div class="p-3 border-y">{{ value }}</div>
              <div class="p-3">{{ text }}</div>
            </div>
          </template>
        </div>
      </div>

      <criteria-comparison :criteria="criteriaCode" :participants="participants" :question-groups="questionGroups" :staticLabels="['FELCO SA', 'Maturité digitale globale']"></criteria-comparison>
    </div>
  </div>
</content-wrapper>

  `,
};
