<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full items-center">
    <div class="w-full flex justify-center items-center">
      <div
        class="image-avatar"
        :style="`background-image:url(${renderObject.avatars.meta.url})`"
      ></div>
    </div>
    <div class="flex w-full justify-center items-center pt-3 pb-2">
      <div class="w-full">
        <div class="">
          <div class="text-base font-semibold p-2">Chose option violate:</div>
          <el-select
            v-model="valueViolate"
            multiple
            value-key="id"
            collapse-tags
            placeholder="Select violate"
            style="width: 240px;"
            @change="onChangeViolate"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="grid grid-cols-4 gap-2 mt-3">
          <div
            class="border text-sm p-1 rounded-lg bg-slate-100"
            v-for="(item, index) in valueViolates"
            :key="index"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center w-full pt-2 pb-5">
      <div class="w-full">
        <div class="text-base font-semibold text-left">Add comment:</div>
        <div class="w-full pt-2 justify-center flex items-center">
          <div class="w-[500px]">
            <el-input
              v-model="textNote"
              maxlength="30"
              class="w-full h-full rounded-lg"
              placeholder="Please enter the reason for the report"
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 4 }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full justify-between flex items-center">
      <button
        @click="onClickApprove(renderObject)"
        type="button"
        class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-lg px-5 py-1 text-center me-2 mb-2"
      >
        Approve
      </button>
      <button
        @click="onClickReject(renderObject)"
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-lg px-5 py-1 text-center me-2 mb-2"
      >
        Reject
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "view-image",

  data() {
    return {
      textNote: "",
      valueViolates: [],
      keyViolate: [],
    };
  },

  setup() {
    const valueViolate = ref([]);
    const options = [
      {
        value: "item_1",
        label: "Máu me, bạo lực",
      },
      {
        value: "item_2",
        label: "Trẻ em",
      },
      {
        value: "item_3",
        label: "Logo quyền sở hữu trí tuệ",
      },
      {
        value: "item_4",
        label: "Hình ảnh chứa chủ yếu là văn bản",
      },
      {
        value: "item_5",
        label: "Vũ khí",
      },
      {
        value: "item_6",
        label: "Hình ảnh chứa QR code, URL",
      },
      {
        value: "item_7",
        label: "Hình ảnh meme",
      },
      {
        value: "item_8",
        label: "Hình ảnh khỏa thân, tình dục",
      },
    ];

    return {
      options,
      valueViolate,
    };
  },

  props: ["objectImageValue"],

  computed: {
    renderObject() {
      debugger;
      return this.objectImageValue;
    },
  },

  mounted() {},

  methods: {
    onChangeViolate(val) {
      debugger;
      this.valueViolates = [];
      this.keyViolate = val;
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = this.options.find((x) => x.value === element);
        this.valueViolates.push(findData);
      }
    },

    onClickApprove(val) {
      debugger;
      const objectSave = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 1,
          comment: this.textNote,
          reviewerViolateOption: this.keyViolate,
        },
      };
      this.$emit("onChangeApprove", objectSave);
    },

    onClickReject(val) {
      const objectSave = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 1,
          comment: this.textNote,
          reviewerViolateOption: this.keyViolate,
        },
      };
      this.$emit("onChangeReject", objectSave);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-avatar {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
