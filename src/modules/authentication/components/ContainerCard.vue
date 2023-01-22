<template>
  <v-app >
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn
        
        @click="onClick"
        >Lleva tu contabilidad</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card loading title="Inicia Sesion"  variant="tonal">
          <ContainerForm/>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import { defineAsyncComponent } from "vue";
export default {
  components:{
    ContainerForm: defineAsyncComponent(() => import("../components/ContainerForm.vue")),
  }
};
</script>


