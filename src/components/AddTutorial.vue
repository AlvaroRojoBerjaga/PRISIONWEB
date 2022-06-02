<template>

<div>

 <header>
    <div class="px-3 py-2 bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none" href="/">
          <img src="/assests/prisionweb.png" alt="" width="110" class="d-inline-block align-text-top">
        </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/solicitar" class="nav-link text-white "> 
                <img class="bi d-block mx-auto mb-1" src="/assests/file-lines-solid.svg" title="Solicitudes" width="24" height="24">
                
              </a>
            </li>
            <li>
              <a href="/assests/NormativaVisitantes.pdf" target="blank" class="nav-link text-white">
                <img class="bi d-block mx-auto mb-1" src="/assests/circle-info-solid.svg" title="Normativa" width="24" height="24">
                
              </a>
            </li>
            <li>
              <a href="/perfil" class="nav-link text-white">
                <img class="bi d-block mx-auto mb-1 text-gray" src="/assests/circle-user-solid.svg" title="Perfil" width="24" height="24">
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
   <div class="container">
     <div class="borde mt-5">
    <div v-if="!submitted">
      <h2 class="mb-4">Crear una solicitud de visita</h2>
      <div class="form-floating mb-3">
              <input class="form-control" id="preso" placeholder="Nombre" required v-model="tutorial.preso" name="preso" />
              <label for="preso">Nombre completo del preso</label>
      </div>
      <p>Recuerde que debe seguir la normativa para poder acudir a prisión. <a href="/assests/NormativaVisitantes.pdf" target="blank">Ver normativa <i class="fa-solid fa-arrow-up-right-from-square"></i></a> </p>
      <p>Si tiene alguna duda o comentario, no dude en escribirnos. <a href="/">Ir a inicio <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
      <button @click="saveTutorial" class="btn btn-primary snd">Envíar solicitud</button>
    </div>
    <div v-else>
      <h4>Solicitud enviada correctamente!</h4>
      <h4>Le mandaremos un email lo mas pronto posible</h4>    
    </div>
     </div>
  </div>
</div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        preso: "",
        published: false,
        email: this.getCookie()
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        preso: this.tutorial.preso,
        published: false,
        email: this.getCookie()
      };
      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCookie() {
      var name = "email=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    },
    checkCookie() {
      var resul = false;
      var username = this.getCookie();
      if (username != "") {
        resul = true;
      }
      return resul;
    },
    redirigir(){
      var logeado = this.checkCookie();
      if(!logeado){
        window.location.href = "/iniciarsesion";
      }
    }
    
  
  },
  beforeMount() {
    this.redirigir();
  },
};
</script>
<style>


.snd{
  background-color: white;
  border-color: white;
  font-size: large;
  font-weight: bolder;
  color: rgb(0, 26, 255);
}
.snd:hover{
  color: #275dda;
  background-color: white;
  border-color: white;
}

label {
  color: #65676d;
}
.borde{
    border: solid 2px #ced4da;
    border-radius: 10px;
    padding: 5%;
}
p{
    font-family: "Letter"
  }
  h2{
    font-family: "Title"
  }
</style>