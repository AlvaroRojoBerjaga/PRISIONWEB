<template>
<div class="full">
  <div class="container">
    <div class="row">
      <div class="col-3 d-none d-md-block"></div>
      <div class="col-12 col-md-6 caja p-5">

          <h3 class="mb-5">Crear cuenta</h3>
          <form @submit.prevent="guardar">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" v-model="usuario.email" placeholder="name@example.com" required>
              <label for="floatingInput">Correo electrónico</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="usuario.password" required >
              <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault" required
              >
              <label class="form-check-label" for="flexCheckDefault">
                Acepto la <a href="/assests/politicaprivacidad.pdf" target="blank">Política de Privacidad</a>
              </label>
            </div>
            <div class="mb-5">
              <router-link class="btn btn-secondary float-start" to="/iniciarsesion" role="button">Ya tengo cuenta</router-link>
              <button type="submit" class="btn btn-primary float-end" >Registrarse</button>
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
        .createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then(() => {
          this.crearCookie(this.usuario.email);
          window.location.href = "/";
        })
        .catch(() => {
          window.alert("Usuario ya existente");
        });
    },
   
  },
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
}
.caja {
  border: solid 2px #ced4da;
  border-radius: 10px;
}
label {
  color: #65676d;
}
</style>