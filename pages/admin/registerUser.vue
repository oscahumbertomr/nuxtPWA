<template>
  <v-form autocomplete="new-password">
    <h1>Register User</h1>
    <v-text-field
      label="Email"
      :disabled="loading"
      v-model="email"
      v-on:keyup.enter="login"
      :prepend-icon="mdiAccountCircle"
    />
    <v-text-field
      label="User nickname"
      v-model="nickname"
      v-on:keyup.enter="login"
      :prepend-icon="mdiAccountCircle"
    />
    <v-text-field
      v-on:keyup.enter="login"
      :type="showPassword ? 'text' : 'password'"
      label="New password"
      autocomplete="new-password"
      :disabled="loading"
      v-model="password"
      :prepend-icon="mdiLock"
      :append-icon="showPassword ? mdiEye : mdiEyeOff"
      @click:append="showPassword = !showPassword"
    />
    <v-btn @click="registerUser" block color="primary">Register</v-btn>
  </v-form>
</template>

<script>
import { mdiAccountCircle, mdiLock, mdiEye, mdiEyeOff } from "@mdi/js";
export default {
  name: "registerUser",
  data() {
    return {
      mdiAccountCircle: mdiAccountCircle,
      mdiLock: mdiLock,
      mdiEye: mdiEye,
      mdiEyeOff: mdiEyeOff,
      showPassword: false,
      email: null,
      nickname: null,
      password: null,
      loading: false,
    };
  },
  methods: {
    registerUser() {
      this.loading = true;
      this.$axios
        .post("/api/auth/register", {
          email: this.email,
          name: this.nickname,
          password: this.password,
        })
        .then((response) => {
          this.email = null;
          this.nickname = null;
          this.password = null;
        });
    },
  },
};
</script>

<style scoped>
</style>