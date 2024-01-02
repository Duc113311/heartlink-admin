<template>
  <div class="w-full h-full"></div>
</template>

<script>
export default {
  name: "censorship-page",

  data() {
    return {
      tableData: [
        {
          id: "01",
          date: "2016-05-03 19:02",
          name: "Nguyen Van Duc",
          address: "No. 189, Grove St, Los Angeles",
          statusHand: "Pending",
          statusAI: "Approved",
          scores: 100,
        },
        {
          id: "01",
          date: "2016-05-03 19:02",
          name: "Nguyen Van Duc",
          address: "No. 189, Grove St, Los Angeles",
          statusHand: "Pending",
          statusAI: "Approved",
          scores: 100,
        },
        {
          id: "01",
          date: "2016-05-03 19:02",
          name: "Nguyen Van Duc",
          address: "No. 189, Grove St, Los Angeles",
          statusHand: "Pending",
          statusAI: "Approved",
          scores: 100,
        },
        {
          id: "01",
          date: "2016-05-03 19:02",
          name: "Nguyen Van Duc",
          address: "No. 189, Grove St, Los Angeles",
          statusHand: "Pending",
          statusAI: "Approved",
          scores: 100,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    onClickViewImage() {
      this.$emit("onChangeViewImage", true);
    },

    onClickUpdateImage() {
      this.$emit("onChangeUpdateImage", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-table {
  background-image: url("../../assets/icon_svg/avatar.jpg");
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
