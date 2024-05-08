<template>
  <div class="w-full h-full p-[15px]">
    <!-- Title -->

    <TitlePage></TitlePage>
    <!-- Search -->

    <SearchPage
      @onChangeAddNew="onChangeAddNew"
      :dataRoles="dataRoles"
    ></SearchPage>

    <!-- Table -->

    <TableAccount
      :dataTable="dataTable"
      :loading="isLoading"
      @onChangeLimitNext="onChangeLimitNext"
      @onChangeDeleteData="onChangeDeleteData"
      @onChangeUpdateData="onChangeUpdateData"
      @onChangeResetData="onChangeResetData"
      @onChangeDisableData="onChangeDisableData"
    ></TableAccount>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    width="30%"
    @close="closeDialog"
    draggable
  >
    <template #title>
      <div class="text-lg font-semibold text-slate-500">Create account</div>
    </template>
    <el-form
      :model="dataForm"
      :id="dataForm._id"
      :rules="rules"
      ref="dataFormRef"
      label-position="left"
    >
      <!-- Full name -->
      <el-form-item
        label="Full name"
        :label-width="formLabelWidth"
        prop="name"
        :rules="[
          {
            required: true,
            message: 'Full name is required',
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

      <!-- Address -->
      <el-form-item
        label="Address"
        :label-width="formLabelWidth"
        prop="address"
        :rules="[
          {
            required: true,
            message: 'Address is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.address"
          autocomplete="off"
        />
      </el-form-item>
      <!-- Email -->
      <el-form-item
        label="Email"
        :label-width="formLabelWidth"
        prop="email"
        :rules="[
          {
            required: true,
            message: 'Email is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.email"
          autocomplete="off"
        />
      </el-form-item>
      <!-- Phone number -->
      <el-form-item
        label="Phone number"
        :label-width="formLabelWidth"
        prop="phone"
        :rules="[
          {
            required: true,
            message: 'Phone number is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          :disabled="actionView"
          v-model="dataForm.phone"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item
        label="Permission"
        :label-width="formLabelWidth"
        prop="role"
        :rules="[
          {
            required: true,
            message: 'Permission is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-select v-model="dataForm.role" placeholder="Please select role">
          <el-option
            v-for="(item, index) in dataRoles"
            :key="index"
            :label="`${item.label}`"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="Password"
        :label-width="formLabelWidth"
        prop="pass"
        :rules="[
          {
            required: true,
            message: 'Password is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="dataForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Confirm password"
        :label-width="formLabelWidth"
        prop="pass"
        :rules="[
          {
            required: true,
            message: 'Password is required',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="dataForm.password"
          type="password"
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
import TableAccount from "../../../components/profile/table/table-account";
import SearchPage from "../../../components/profile/search-button/search-page";
import TitlePage from "../../../components/profile/title/title-page";
import { mapActions, mapMutations } from "vuex";
import { ElNotification } from "element-plus";

export default {
  components: {
    TableAccount,
    SearchPage,
    TitlePage,
  },
  name: "account-view",
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
      translatedValue: "",
      dataFormAction: {},
      isLoading: false,
    };
  },

  computed: {
    dataTable() {
      const listData = this.$store.state.accountModule.listAccount;

      return listData;
    },

    dataForm() {
      return this.$store.state.accountModule.formAccount;
    },

    dataRoles() {
      return this.$store.state.accountModule.listRole;
    },

    // listKey() {
    //   return this.$store.state.profileModule.listKeyLanguages;
    // },
  },

  async mounted() {
    await this.getRoles();
    await this.getListAccount({
      currentPage: 0,
      pageSize: 18,
    });
  },

  methods: {
    ...mapMutations(["setFormAccount"]),
    ...mapActions([
      "getListAccount",
      "getRoles",
      "deleteAccount",
      "updateAccount",
      "resetAccount",
      "updateDisableAccount",
      "insertAccount",
    ]),

    onChangeAddNew(val) {
      this.dialogFormVisible = val;
    },
    onChangeLimitNext() {},
    async onChangeDeleteData(val) {
      await this.deleteAccount(val).then((data) => {
        this.notificationSuccess();
      });

      this.isLoading = true;
      await this.getListAccount({
        currentPage: 0,
        pageSize: 16,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    onChangeUpdateData(val) {
      this.dataFormAction = val;
      this.setFormAccount(this.dataFormAction);
      this.actionView = false;
      this.dialogFormVisible = true;
    },

    async onChangeResetData(val) {
      await this.resetAccount(val).then((data) => {
        this.notificationSuccess();
      });

      this.isLoading = true;
      await this.getListAccount({
        currentPage: 0,
        pageSize: 16,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    async onChangeDisableData(val) {
      await this.updateDisableAccount(val).then((data) => {
        this.notificationSuccess();
      });

      this.isLoading = true;
      await this.getListAccount({
        currentPage: 0,
        pageSize: 16,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    onConfirmDialog() {
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
        await this.updateAccount(formData).then((data) => {
          this.notificationSuccess("Update record successfully");
          this.dialogFormVisible = false;
        });
      } else {
        await this.insertAccount(formData).then((data) => {
          this.notificationSuccess("Insert record successfully");
        });
      }
      this.$refs.dataFormRef.resetFields();

      this.isLoading = true;
      await this.getListAccount({
        currentPage: 0,
        pageSize: 16,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    onCancelDialog() {
      this.dialogFormVisible = false;
      this.$refs.dataFormRef.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped></style>
