
export default {
  name: "SectionTech",
  components: {
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clique() {
      console.log(this.count);
      this.count++;
    },
  }
};