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
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
import Swal from "sweetalert2";

export default {
  setup() {
    const router =useRouter()
    const { createUser } = useAuth();

    const userForm = ref({
      name: "juan",
      email: "juan@gmail.com",
      password: "123456",
    });

    return {
      userForm,
      onSubmit: async () => {
        if (
          !userForm.value.name ||
          !userForm.value.email ||
          !userForm.value.password
        ) {
          Swal.fire("Favor de llenar los campos faltantes");
        } else {
          const { ok, message } = await createUser(userForm.value);
          console.log(ok, message);
          if (!ok) Swal.fire("Error", "El email ya fue registrado", "error")
          else router.push({name: 'inicio'})
        }
      },
    };
  },
};
</script>

