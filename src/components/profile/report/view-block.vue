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
