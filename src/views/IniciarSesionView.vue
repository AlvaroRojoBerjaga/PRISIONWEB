<template>
<div class="full">
  <div class="container">
    <div class="row">
      <div class="col-3 d-none d-md-block"></div>
      <div class="col-12 col-md-6 caja p-5">

          <h3 class="mb-5">Iniciar sesión</h3>
          <form @submit.prevent="guardar" >
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" v-model="usuario.email" placeholder="name@example.com" required>
              <label for="floatingInput">Correo electrónico</label>
            </div>
            <div class="form-floating mb-4">
              <input type="password" class="form-control" id="floatingPassword" v-model="usuario.password" placeholder="Password" required>
              <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="mb-5">
              <router-link class="btn btn-secondary float-start" to="/registrarse" role="button">Crear cuenta</router-link>
              <button class="btn btn-primary float-end" type="submit">Acceder</button>
            </div>
          </form>
      </div>
      </div>
      <div class="col-3 d-none d-md-block" ></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
  
export default {
  data() {
    return {
        usuario:{
            email:"",
            password:""
        }
    };
  },
  methods: {
    crearCookie(email){
      var d = new Date();
      d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = "email" + "=" + email + "; " + expires;
    },
    guardar() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(() => {
          console.log(this.usuario.email);
           if(this.usuario.email == "admin@admin.com"){
          window.location.href = "/admin";
          } else if(this.usuario.email == "atencion@cliente.com"){
            window.location.href = "/atencionalcliente";
          } else {
            window.location.href = "/";
          }
          this.crearCookie(this.usuario.email);
        })
        .catch(() => {
          window.alert("Usuario o contraseña incorrecta");
        });
    },
    
  },
  setup() {},
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-family: "Title";
}
.full{
  display: flex;
  align-items: center;
  min-height: 80vh;
}
.btn-secondary{
  background-color: white;
  border-color: white;
  color: rgb(0, 102, 255);
}
.btn-secondary:hover{
  color: #65676d;
  background-color: white;
  border-color: white;
}
.caja {
  border: solid 2px #ced4da;
  border-radius: 10px;
}
label {
  color: #65676d;
}
</style>