<template>
  <div class="w-full h-full">
    <div class="bg-default">
      <FormLogin></FormLogin>
    </div>
  </div>
</template>

<script>
import FormLogin from "../../components/login/form-login";
export default {
  components: { FormLogin },
  name: "login-view ",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-default {
  background-image: url("../../assets/icon_svg/bg-login.svg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
