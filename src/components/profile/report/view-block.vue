<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full items-center">
    <div class="w-full pb-6">
      <div class="text-base text-center mb-4">
        Sau khi bạn lựa chọn các giới hạn dưới đây, tài khoản
        <span class="font-semibold">Duc Nguyễn</span> sẽ bị block
      </div>
      <div class="w-full flex justify-center items-center gap-4">
        <div class="flex items-center gap-2">
          <div
            class="w-4 h-4 rounded-sm"
            style="background-color: #13ce66;"
          ></div>
          <div>Vô thời hạn</div>
        </div>
        <div class="flex items-center gap-2">
          <div
            class="w-4 h-4 rounded-sm"
            style="background-color: #ff4949;"
          ></div>
          <div>Có thời hạn</div>
        </div>
      </div>
    </div>

    <div class="w-full gap-4">
      <div class="w-full flex items-center">
        <div class="font-semibold w-36 text-left">Số ngày</div>
        <div>
          <el-input-number
            v-model="valueNumberDay"
            :min="1"
            :max="10"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="w-full flex items-center">
        <div class="font-semibold w-36 text-left">Block vĩnh viễn</div>
        <div>
          <el-switch
            v-model="valueForever"
            class="ml-2"
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
          />
        </div>
      </div>
    </div>

    <div class="w-full justify-end flex items-center mt-5">
      <button
        @click="onClickCancel()"
        type="button"
        class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-base px-5 py-1 text-center me-2 mb-2"
      >
        Cancel
      </button>
      <button
        @click="onClickApply()"
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-base px-5 py-1 text-center mb-2"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-block",

  data() {
    return {
      valueForever: false,
      valueNumberDay: 0,
    };
  },

  props: {
    objectCustomer: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {},

  methods: {},
};
</script>
