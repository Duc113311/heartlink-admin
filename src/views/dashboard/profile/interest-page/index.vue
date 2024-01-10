<template>
  <div class="w-full h-full">
    <!-- Title -->
    <titlePage></titlePage>

    <!-- Search -->
    <SearchPage @onChangeAddNew="onChangeAddNew"></SearchPage>

    <!-- table -->

    <TableLanguage
      :dataTable="dataTable"
      :loading="isLoading"
      @onChangeLimitNext="onChangeLimitNext"
      @onChangeDeleteData="onChangeDeleteData"
      @onChangeUpdateData="onChangeUpdateData"
      @onChangeViewData="onChangeViewData"
    ></TableLanguage>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    width="30%"
    @close="closeDialog"
    draggable
  >
    <template #title>
      <div class="text-lg font-semibold text-slate-500">Add primary key</div>
    </template>
    <el-form
      :model="dataForm"
      :id="dataForm._id"
      :rules="rules"
      ref="dataFormRef"
      label-position="left"
    >
      <el-form-item
        label="Primary key"
        :label-width="formLabelWidth"
        prop="code"
        :rules="[
          {
            required: true,
            message: 'Primary key is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.code"
          autocomplete="off"
          ref="codeInput"
        />
      </el-form-item>
      <!-- <el-form-item label="Primary name" :label-width="formLabelWidth">
        <el-input v-model="dataForm.name" autocomplete="off" />
      </el-form-item> -->
      <el-form-item
        label="English name"
        :label-width="formLabelWidth"
        prop="langs.en"
        :rules="[
          {
            required: true,
            message: 'English name is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.langs.en"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Vietnamese name"
        :label-width="formLabelWidth"
        prop="langs.vi"
        :rules="[
          {
            required: true,
            message: 'Vietnamese name is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.langs.vi"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Japan name"
        :label-width="formLabelWidth"
        prop="langs.ja"
        :rules="[
          {
            required: true,
            message: 'Japan name is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.langs.ja"
          autocomplete="off"
        />
      </el-form-item>
      <!-- <el-form-item label="" :label-width="formLabelWidth">
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
      </el-form-item> -->
      <div class="dialog-footer flex items-center justify-end">
        <button
          type="button"
          @click="onCancelDialog()"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
        >
          Cancel
        </button>
        <button
          :disabled="actionView"
          @click="onConfirmDialog()"
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
        >
          Confirm
        </button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
import TableLanguage from "../../../../components/profile/table/table-language";
import SearchPage from "../../../../components/profile/search-button/search-page";
import titlePage from "@/components/profile/title/title-page.vue";
import { ElNotification } from "element-plus";

import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    TableLanguage,
    SearchPage,
    titlePage,
  },

  setup() {
    const notificationSuccess = (message) => {
      ElNotification({
        title: "Success",
        message: message,
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
      dialogFormVisible: false,
      actionView: false,
      form: {
        key: "",
        name: "",
        region: "",
      },
      formLabelWidth: "140px",
      titleDialog: "Add primary key",
      selectedLanguage: "en",
      translatedValue: "",
      dataFormAction: {},
      isLoading: false,
    };
  },

  computed: {
    dataTable() {
      const listData = this.$store.state.profileModule.listInterest;

      return listData;
    },

    dataForm() {
      return this.$store.state.profileModule.formData;
    },

    listKey() {
      return this.$store.state.profileModule.listKeyLanguages;
    },
  },

  async mounted() {
    this.isLoading = true;

    await this.getListInterests({
      currentPage: 0,
      pageSize: 18,
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  methods: {
    ...mapMutations(["setFormData"]),
    ...mapActions([
      "getListInterests",
      "insertInterest",
      "updateInterest",
      "deleteInterest",
    ]),

    onChangeAddNew(val) {
      this.dialogFormVisible = val;
    },

    closeDialog() {
      this.$refs.dataFormRef.resetFields();
    },

    onCancelDialog() {
      this.dialogFormVisible = false;
      this.$refs.dataFormRef.resetFields();
    },
    async onConfirmDialog() {
      // this.dialogFormVisible = false;

      this.$refs.dataFormRef.validate((valid) => {
        if (valid) {
          this.handelAPI();
          // Form is valid, you can submit the data or perform other actions
          console.log("Form is valid");
        } else {
          // Form is not valid, show an error message or handle it accordingly
          return false;
        }
      });
      // await this.updateInterest(this.dataFormAction).then((data) => {
      //   this.notificationSuccess();
      // });
    },

    async handelAPI() {
      const formData = this.dataForm;
      if (formData._id) {
        await this.updateInterest(formData).then((data) => {
          this.notificationSuccess("Update record successfully");
          this.dialogFormVisible = false;
        });
      } else {
        await this.insertInterest(formData).then((data) => {
          this.notificationSuccess("Insert record successfully");
        });
      }
      this.$refs.dataFormRef.resetFields();
      // await this.updateInterest(this.dataFormAction).then((data) => {
      //   this.notificationSuccess();
      // });
      this.isLoading = true;
      await this.getListInterests({
        currentPage: 0,
        pageSize: 16,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    async onChangeLimitNext(val) {
      await this.getListInterests({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
      });
    },

    onChangeViewData(val) {
      this.dataFormAction = {
        _id: val._id,
        code: val.code,
        langs: {
          en: val.langs.en,
          vi: val.langs.vi,
          ja: val.langs.ja,
        },
        insert: val.insert,
        update: val.update,
      };
      this.setFormData(this.dataFormAction);
      this.actionView = true;
      this.dialogFormVisible = true;
    },

    onChangeUpdateData(val) {
      this.dataFormAction = {
        _id: val._id,
        code: val.code,
        langs: {
          en: val.langs.en,
          vi: val.langs.vi,
          ja: val.langs.ja,
        },
        insert: val.insert,
        update: val.update,
      };
      this.setFormData(this.dataFormAction);
      this.actionView = false;
      this.dialogFormVisible = true;
    },

    async onChangeDeleteData(val) {
      await this.deleteInterest(val).then((data) => {
        this.notificationSuccess();
      });

      this.isLoading = true;
      await this.getListInterests({
        currentPage: 0,
        pageSize: 16,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
