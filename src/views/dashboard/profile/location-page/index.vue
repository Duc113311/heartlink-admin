<template>
  <div class="w-full h-full">
    <!-- Title -->
    <TitlePage></TitlePage>

    <!-- Search -->

    <SearchPage @onChangeAddNew="onChangeAddNew"></SearchPage>

    <!-- Table -->

    <TableLocation
      :dataTable="dataTable"
      :loading="isLoading"
      @onChangeLimitNext="onChangeLimitNext"
      @onChangeDeleteData="onChangeDeleteData"
      @onChangeUpdateData="onChangeUpdateData"
      @onChangeViewData="onChangeViewData"
    ></TableLocation>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    width="30%"
    @close="closeDialog"
    draggable
  >
    <template #title>
      <div class="text-lg font-semibold text-slate-500">Add area new</div>
    </template>
    <el-form
      :model="dataForm"
      :id="dataForm._id"
      :rules="rules"
      ref="dataFormRef"
      label-position="left"
    >
      <el-form-item
        label="Area name"
        :label-width="formLabelWidth"
        prop="name"
        :rules="[
          {
            required: true,
            message: 'Area name key is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.name"
          autocomplete="off"
          ref="nameInput"
        />
      </el-form-item>
      <el-form-item
        label="Latitude"
        :label-width="formLabelWidth"
        prop="lat"
        :rules="[
          {
            required: true,
            message: 'Latitude is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.lat"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Longitude"
        :label-width="formLabelWidth"
        prop="lng"
        :rules="[
          {
            required: true,
            message: 'Longitude is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.lng"
          autocomplete="off"
        />
      </el-form-item>

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
import TableLocation from "../../../../components/profile/table/table-location";
import SearchPage from "../../../../components/profile/search-button/search-page";
import TitlePage from "../../../../components/profile/title/title-page";

import { ElNotification } from "element-plus";

import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    TableLocation,
    SearchPage,
    TitlePage,
  },
  name: "location-view",
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
  data() {
    return {
      dialogFormVisible: false,
      actionView: false,

      formLabelWidth: "140px",
      dataFormAction: {},
      isLoading: false,
    };
  },

  computed: {
    dataTable() {
      const listData = this.$store.state.profileModule.listLocation;

      return listData;
    },

    dataForm() {
      return this.$store.state.profileModule.formLocation;
    },

    listKey() {
      return this.$store.state.profileModule.listKeyLanguages;
    },
  },

  async mounted() {
    this.isLoading = true;

    await this.getListLocations({
      currentPage: 0,
      pageSize: 18,
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  methods: {
    ...mapMutations(["setFormLocation"]),
    ...mapActions([
      "getListLocations",
      "insertLocation",
      "updateLocation",
      "deleteLocation",
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
        } else {
          return false;
        }
      });
    },

    async handelAPI() {
      const formData = this.dataForm;
      if (formData._id) {
        await this.updateLocation(formData).then((data) => {
          this.notificationSuccess("Update record successfully");
          this.dialogFormVisible = false;
        });
      } else {
        await this.insertLocation(formData).then((data) => {
          this.notificationSuccess("Insert record successfully");
        });
      }
      this.$refs.dataFormRef.resetFields();

      this.isLoading = true;
      await this.getListLocations({
        currentPage: 0,
        pageSize: 16,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    async onChangeLimitNext(val) {
      await this.getListLocations({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
      });
    },

    onChangeViewData(val) {
      this.dataFormAction = val;
      this.setFormLocation(this.dataFormAction);
      this.actionView = true;
      this.dialogFormVisible = true;
    },

    onChangeUpdateData(val) {
      this.dataFormAction = val;

      this.setFormLocation(this.dataFormAction);
      this.actionView = false;
      this.dialogFormVisible = true;
    },

    async onChangeDeleteData(val) {
      await this.deleteLocation(val).then((data) => {
        this.notificationSuccess();
      });

      this.isLoading = true;
      await this.getListLocations({
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
