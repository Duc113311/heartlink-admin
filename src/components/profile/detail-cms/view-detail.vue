<template>
  <div class="w-full items-center">
    <!-- -->
    <!-- {{ renderObject }} -->
  </div>
</template>

<script>
export default {
  name: "view-detail",

  data() {
    return {};
  },

  props: {
    objectCustomer: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    renderObject() {
      return this.objectCustomer;
    },
  },

  mounted() {},

  methods: {},
};
</script>
