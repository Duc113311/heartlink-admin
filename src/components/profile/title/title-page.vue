<template>
  <div
    class="flex flex-col gap-3 h-[40px] sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-xl font-bold text-black">{{ nameTitle }}</h2>

    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <a class="font-medium" href="index.html">Dashboard /</a>
        </li>
        <li class="text-blue-400">{{ nameTitle }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "title-page",

  data() {
    return {};
  },

  computed: {
    nameTitle() {
      const nameTitle = this.$route.meta.nameTitle;

      return nameTitle;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
