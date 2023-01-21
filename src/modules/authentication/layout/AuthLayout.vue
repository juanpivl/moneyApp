<template>
  <div class="container">
    <div >
      <div class="text">
        <h1>Bienvenido a la aplicacion</h1>
        <br>
        <div>
          <button @click.prevent="showRegistration = false" class="button">login</button> 
          <button @click.prevent="showRegistration = true" class="button">register</button>
        </div>
      </div>
    </div>

    <div>
      <div v-if="!showRegistration">
        <div class="textD">
          <h1>Iniciar sesion</h1>
          <form>
            <label>
              Email:
              <input type="email" />
            </label>
            <label>
              Contraseña:
              <input type="password" />
              <button @click="goToMoney">Iniciar sesion</button>
            </label>
          </form>
        </div>
      </div>
      <div v-else>
        <div class="textD">
          <h1>Registrarse</h1>
        <form>
          <label>
            Email:
            <input type="email" v-model="email" />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" v-model="password" />
          </label>
          <br />
          <label>
            Nombre:
            <input type="text" v-model="name" />
          </label>
          <br />
          <button @click.prevent="register">Registrarse</button>
        </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      showRegistration: false,
    };
  },
  methods: {
    goToMoney() {
      return this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style scoped>


.text {
  position: absolute;
  width: 400px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
  padding-top: 10px;
  border-radius: 20px;

  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  text-align: center;
}
.textD {
  position: absolute;
  width: 300px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
  padding-top: 10px;
  border-radius: 20px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  text-align: center;
}

.container{
  height: 100vh;
  background-image: url('@/assets/puerquito.png');
  background-size:cover;
  background-repeat: no-repeat;
  
}

.button{
  background-color: blue; /* color de fondo */
  color: white; /* color de texto */
  padding: 10px 20px; /* espacio alrededor del texto */
  border: none; /* sin borde */
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
}
</style>