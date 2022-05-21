export default {
  emits: ["navigation-clicked"],

  props: {
    refs: {
      type: Array,
      required: true,
    },
  },

  methods: {
    scrollTo(refName) {
      this.$emit("navigation-clicked", refName);
    },
  },

  template: `
    <div class="smooth-fade bg-gray-600 p-3 opacity-0 hover:opacity-50 rounded-md text-white w-24 min-h-24 fixed top-1.5 right-0 text-sm">
        <div v-for="ref in refs" :key="ref.id" @click="scrollTo(ref.id)" class="border p-1 m-1 hover:cursor-pointer">
            {{ ref.name ? ref.name : ref.id }}
            <div class="flex flex-wrap">
                <div v-for="sub in ref.subs" :key="sub.id" @click.stop="scrollTo(sub.id)" class="border p-1 hover:cursor-pointer hover:bg-gray-700">
                    {{ sub.name ? sub.name : sub.id }}
                </div>
            </div>
        </div>
    </div>
  `,
};
