<template>
  <div>
    <h1>Register</h1>
    <v-form ref="form" @submit.prevent="onSubmit" lazy-validation>
      <v-text-field
        v-model="userForm.name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="userForm.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="userForm.password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

      <br />

      <v-btn color="success" class="me-4" type="submit"> Registro </v-btn>
    </v-form>
  </div>

  <div>
    <router-link :to="{ name: 'login' }">Ingresa</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const userForm = ref({
      name: "",
      email: "",
      password: "",
    });

    return {
      userForm,
      onSubmit: async () => {
        if(!userForm.value.name || !userForm.value.email || !userForm.value.password){
          alert("Favor de llenar los campos faltantes")
        }
        console.log(userForm.value)
      },
    };
  },
};
</script>

