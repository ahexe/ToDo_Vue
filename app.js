const app = Vue.createApp({
  data() {
    return {
      userEnteredValue: '',
      goals: [],
      isDone: []
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
        this.goals.push(this.userEnteredValue);
        this.isDone.push(false);
        // console.log(this.isDone);
        this.userEnteredValue = '';
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    doneGoal(idx) {
      this.isDone[idx] = !this.isDone[idx];
      // console.log(this.isDone);
    }
  },
});

app.mount('#user-goals');
