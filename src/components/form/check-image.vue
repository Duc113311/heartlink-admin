<template>
  <div class="w-form-check">
    <div class="w-full h-full p-5">
      <div class="float-left w-1/2 bg-slate-500 h-full">
        <div class="text-lg font-semibold flex justify-center items-center p-5">
          CENSORED USER PHOTOS
        </div>
        <div class="text-left w-full">
          <div>User name: Nguyen Van Duc</div>
          <div>Birthday: 01/08/1999</div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-center items-center gap-3">
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_pending.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Pending</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_approved.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Approved</div>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="../../assets/icon_svg/ic_disapprove.svg"
                width="18"
                alt=""
              />
              <div class="text-base font-semibold">Disapprove</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <bh-button-active
              :nameButtonDefault="nameDisapprove"
              @onChangeActionButton="onChangeDisapprove"
            ></bh-button-active>
            <bh-button-active
              :nameButtonDefault="nameApproved"
              @onChangeActionButton="onChangeApproved"
            ></bh-button-active>
          </div>
        </div>
        <div class="table-detail p-2 bg-white"></div>
      </div>

      <div class="float-right w-1/2 bg-amber-200 h-full"></div>
    </div>
  </div>
</template>

<script>
import BhButtonActive from "@/control/button/bh-button-active.vue";
export default {
  components: { BhButtonActive },
  name: "check-image",

  data() {
    return {
      nameDisapprove: "Disapprove",
      nameApproved: "Approved",
    };
  },

  mounted() {},

  methods: {
    onChangeDisapprove() {},

    onChangeApproved() {},
  },
};
</script>

<style lang="scss" scoped>
.w-form-check {
  width: 100rem;
  height: 50rem;

  background-color: #ffffff;
}
</style>
