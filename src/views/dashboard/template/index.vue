<template>
  <div class="w-full h-full">
    <CmsDashboard></CmsDashboard>
  </div>
</template>

<script>
import CmsDashboard from "../../../components/cms/cms-dashboard";
export default {
  components: {
    CmsDashboard,
  },
  name: "template-view",

  data() {
    return {
      header: ["Name", "Age", "Address", "Action"],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
// Header
.page-header {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

// Table
.box {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-shadow: 0 0.75rem 1.5rem rgba(15, 23, 42, 0.03);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0.75rem 1.5rem var(--tw-shadow-color);
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0.75rem 1.5rem rgba(15, 23, 42, 0.03);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.box-header {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 500;
}

.box-title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}

.ti-custom-table {
  min-width: 100%;
}

.ti-custom-table th {
  --tw-bg-opacity: 1;
  background-color: #374151;
  color: #ffffff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: start;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.ti-custom-table-head > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  --tw-divide-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-divide-opacity));
}

.ti-custom-table td {
  white-space: nowrap;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
}

.ti-custom-table tbody tr:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.option-page {
  border-radius: 10px !important;
  line-height: 1rem !important;
}
</style>
