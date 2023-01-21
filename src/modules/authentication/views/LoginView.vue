<template>
   
            <button type="submit" class="btn button" @click="goToMoney">
              Iniciar sesión
            </button>
               | 
            <router-link to="/registro" class="router-link">No tienes cuenta?</router-link>
          
  </template>
    
    <script>
  export default {
    
    methods: {
      goToMoney() {
       
          return this.$router.push({ name: "inicio" });
        
  
        
      },
    },
  };
  </script>
    
  <style >
  
  
  .centrado {
    position: absolute;
    width:300px;
    padding-right: 20px;
    padding-left:20px;
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
  
  .button{
    color: black;
    font-family:Arial, Helvetica, sans-serif;
    background-color: coral;
    
  }
  .button:hover {
      background-color: #4CAF50; /* Green */
      color: white;
  }
  
  .router-link{
    color: black;
  }
  
  </style>
    