const app = Vue.createApp({
  data() {
    return {
      userEnteredValue: '',
      goals: [],
    };
  },
  computed: {
    goalsLength() {
      if (this.goals.length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    addGoal() {
      if (this.userEnteredValue != '') {
        this.goals.push([this.userEnteredValue, false]);
        this.userEnteredValue = '';
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    doneGoal(idx) {
      this.goals[idx][1] = !this.goals[idx][1]
    }
  },
});

app.mount('#user-goals');
