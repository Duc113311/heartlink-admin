<template>
  <div class="container">
    <div class="mb-10 w-full flex justify-center items-center">
      <img src="../../assets/icon_svg/ic_logo_name.svg" width="250" />
    </div>
    <div class="card">
      <form @submit.prevent="validateForm">
        <div class="single-input" ref="username">
          <img src="../../assets/icon_svg/ic_account.svg" class="mr-2" />
          <input
            v-model="username"
            @input="handelAccount"
            type="text"
            placeholder="User name"
          />
        </div>

        <div class="single-input" ref="password">
          <img src="../../assets/icon_svg/ic_password.svg" class="mr-2" />
          <input
            @input="handelAccount"
            v-model="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div v-if="errorName" class="error-message">
          {{ errorName }}
        </div>
        <div class="w-full flex justify-center items-center">
          <!-- <div class="buttons">
            <a href="#" class="register-link">Register</a>
            <button type="submit" class="login-button">Login</button>
          </div> -->

          <BhButtonActive
            :nameButtonDefault="nameLogin"
            :statusDisable="isDisable"
            :numberWeightBold="600"
            :isWidth="true"
            @onClickActionButton="onChangeLogin"
          ></BhButtonActive>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BhButtonActive from "../../control/button/bh-button-active";
export default {
  components: { BhButtonActive },
  name: "form-login",

  data() {
    return {
      nameLogin: "LOGIN",
      isDisable: false,

      username: "",
      password: "",
      errorName: "",
    };
  },

  mounted() {},

  methods: {
    ...mapActions(["loginApp", "loginAppView"]),
    /**
     * Validate form login
     */
    validateForm() {
      debugger;

      if (!this.username && !this.password) {
        this.$refs.username.classList.add("bor-error");
        this.$refs.password.classList.add("bor-error");
        this.errorName = "Please enter user name & password";
      } else if (!this.username) {
        this.$refs.username.classList.add("bor-error");
        this.errorName = "Please enter user name ";
      } else if (!this.password) {
        this.$refs.password.classList.add("bor-error");
        this.errorName = "Please enter password";
      } else {
        this.onChangeLogin();
      }
    },

    handelAccount() {
      if (this.username || this.password) {
        this.$refs.username.classList.remove("bor-error");
        this.$refs.password.classList.remove("bor-error");

        this.errorName = "";
      }
    },
    /**
     * Action login
     */
    onChangeLogin() {
      this.loginAppView({
        username: this.username,
        password: this.password,
      }).then((data) => {
        debugger;
        if (data) {
          this.$router.push({ path: "/dashboard" }).catch(() => {});
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.card {
  width: 370px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 1px 22px 7px rgb(255 255 255 / 30%);
}

.single-input {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 12px;
  transition: box-shadow 0.3s;
  background-color: transparent;
}

form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.single-input input {
  color: #000000;
  border: none;
  outline: none;
}
.single-input input::placeholder {
  color: #694a4a; /* Màu của placeholder */
  letter-spacing: 0.5px;
}
.single-input:focus-within {
  box-shadow: 0 0 10px #19d4ca;
}
.single-input:focus {
  box-shadow: 0 0 10px #19d4ca;
}

.error-message {
  color: red;
}
.bor-error {
  border: 1.5px solid red;
}
@media (max-width: 480px) {
  .card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
