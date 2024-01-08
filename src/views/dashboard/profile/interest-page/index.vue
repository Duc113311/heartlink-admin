<template>
  <div class="w-full h-full">
    <!-- Title -->
    <titlePage></titlePage>

    <!-- Search -->
    <SearchPage @onChangeAddNew="onChangeAddNew"></SearchPage>

    <!-- table -->

    <TableLanguage :dataTable="dataTable"></TableLanguage>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    :title="titleDialog"
    width="30%"
    draggable
  >
    <el-form :model="form">
      <el-form-item label="Primary key" :label-width="formLabelWidth">
        <el-input v-model="form.key" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Primary name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select langue">
          <el-option label="Select All" value="all" />
          <el-option
            v-for="(item, index) in listKey"
            :key="index"
            :label="`${item.value}` + ' - ' + `${item.key}`"
            :value="item.key"
          />
          <el-option />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <button
          type="button"
          @click="onCancelDialog()"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
        >
          Cancel
        </button>
        <button
          @click="onConfirmDialog()"
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
        >
          Confirm
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import TableLanguage from "../../../../components/profile/table/table-language";
import SearchPage from "../../../../components/profile/search-button/search-page";
import titlePage from "@/components/profile/title/title-page.vue";
import { ElNotification } from "element-plus";

import { mapActions } from "vuex";
export default {
  components: {
    TableLanguage,
    SearchPage,
    titlePage,
  },

  setup() {
    const notificationSuccess = () => {
      ElNotification({
        title: "Success",
        message: "This is a success message",
        type: "success",
      });
    };

    return {
      notificationSuccess,
    };
  },
  name: "interest-view",

  data() {
    return {
      dialogFormVisible: true,
      form: {
        key: "",
        name: "",
        region: "",
      },
      formLabelWidth: "140px",
      titleDialog: "Add primary key",
      selectedLanguage: "en",
      translatedValue: "",
    };
  },

  computed: {
    dataTable() {
      const listData = this.$store.state.profileModule.listInterest;

      return listData;
    },

    listKey() {
      return this.$store.state.profileModule.listKeyLanguages;
    },
  },

  async mounted() {
    await this.getListInterests({
      currentPage: 0,
      pageSize: 10,
    });
  },

  methods: {
    ...mapActions(["getListInterests"]),

    onChangeAddNew(val) {
      this.dialogFormVisible = val;
    },

    onCancelDialog() {
      this.dialogFormVisible = false;
    },
    onConfirmDialog() {
      this.dialogFormVisible = false;
      this.ElNotification();
    },
  },
};
</script>

<style lang="scss" scoped></style>
