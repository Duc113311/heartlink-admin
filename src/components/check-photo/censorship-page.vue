<template>
  <div class="w-full h-full">
    <div class="header">
      <div class="row flex flex-wrap">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="border-bottom pb-4 mb-4">
            <div class="font-semibold text-3xl">Overview</div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-page bg-white w-full h-full p-5">
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'date', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="date" label="Date" sortable width="180" />
        <el-table-column prop="name" label="Name User" sortable width="180" />
        <el-table-column prop="name" label="Avatar" sortable width="180">
          <template #default="{ row }">
            <div>{{ row.avatar }}</div>
            <div>
              <div class="avatar-table"></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="Status hand check"
          sortable
          width="200"
        >
          <template #default="{ row }">
            <div class="flex items-center gap-2">
              <img src="../../assets/icon_svg/ic_pending.svg" width="15" />

              <span class="text-base text-blue-400"> {{ row.statusHand }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="Status AI check"
          sortable
          width="200"
        >
          <template #default="{ row }">
            <div class="flex items-center gap-2">
              <img src="../../assets/icon_svg/ic_approved.svg" width="15" />

              <span class="text-base text-green-600"> {{ row.statusAI }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="AI scores" sortable width="150">
          <template #default="{ row }">
            <div class="flex items-center gap-2">
              <span class="text-base"> {{ row.scores }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="address" :formatter="formatter">
          <div class="flex items-center gap-4">
            <button
              @click="onClickViewImage()"
              class="flex items-center gap-2 pl-4 pr-4 pt-1 pb-1 border-2 rounded-lg hover:bg-slate-400 hover:text-white"
            >
              <img src="../../assets/icon_svg/ic_view.svg" alt="" width="20" />
              <span class="text-base font-semibold">View</span>
            </button>
            <button
              @click="onClickUpdateImage()"
              class="flex items-center gap-2 pl-4 pr-4 pt-1 pb-1 border-2 rounded-lg hover:bg-slate-400 hover:text-white"
            >
              <img
                src="../../assets/icon_svg/ic_update.svg"
                alt=""
                width="20"
              />
              <span class="text-base font-semibold">Update</span>
            </button>
          </div>
        </el-table-column>
      </el-table>
    </div>
  </div>
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
