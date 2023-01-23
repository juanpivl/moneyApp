<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
    <h1>Login</h1>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <br />

    <v-btn color="success" class="me-4" @click="validate"> Login </v-btn>

    <v-btn color="error" class="me-4" @click="reset"> Reset Form </v-btn>
    
  </v-form>
  </div>
  <div>
    <router-link :to="{name:'register'}">No tienes cuenta?</router-link>
  </div>
  
  
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRules: [(v) => !!v || "password is required"],
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) this.goToMoney();
    },
    reset() {
      this.$refs.form.reset();
    },
    goToMoney() {
      return this.$router.push({ name: "inicio" });
    },
    goToRegister() {
      return this.$router.push({ name: "register" });
    },
    
  },
};
</script>

