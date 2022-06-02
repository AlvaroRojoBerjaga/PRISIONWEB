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
    <img src="/assests/prision.jpg" class="img-fluid pphoto mt-3 mb-3" alt="Prision">
    <h2 class="mb-1">Bienvenido a PrisionWeb, lugar donde podrás solicitar una visita.</h2>
    <p>Porfavor, recuerde que debe seguir la normativa del centro y una vez haya solicitado una visita deberá seguir las instrucciones que se le indicaran en el email correspondiente que le enviaremos. Si desea ver la normativa: <a href="/assests/NormativaVisitantes.pdf" target="blank">Ver normativa <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
    <p>Si deseas solicitar una visita: <a href="/solicitar">Ir a solicitudes <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
  

  <div class="submit-form formulario mt-5">
    <div v-if="!submitted">
      <h3 class="mb-3">¿Tienes problemas? ¡Contáctanos!</h3>
      <div class="form-group">
        <label for="email">Introduce tu email:</label>
        <input
        placeholder="Example@example.com"
          type="email"
          class="form-control"
          id="email"
          required
          v-model="comment.email"
        />
      </div>
      <div class="form-group mt-2">
        <label for="problem">Indicanos tu problema:</label>
        <textarea
          placeholder="Comments"
          type="text"
          class="form-control"
          id="problem"
          required
          v-model="comment.comentario"
        />
      </div>
      <button @click="saveTutorial" class="btn btn-primary mt-3">Enviar comentario</button>
    </div>
    <div v-else>
      <h4>Comentario enviado correctamente!</h4>
      
    </div>
    </div>
  </div>

  <div class="" id="cookies" v-show="cookie"> 
  <div class="row">
      <div class="col-md-4 col-sm-12 button-fixed">
        <div class="p-3 pb-4 bg-dark rounded text-white">
          <div class="row">
            <div class="col-10">
              <h4>Permitir Cookies</h4>
            </div>
            <div class="col-2 text-center">
              <i class="fas fa-times" v-on:click="denegarCookie"></i>
            </div>
          </div>
         <p class="small"> Usamos cookies o tecnologías similares para almacenar, acceder, mejorar y
        procesar datos personales como su visita en este sitio web. Al hacer clic en «Aceptar todo», aceptas la tecnología utilizada por PrisionWeb y sus socios. Podrá revocar su consentimiento en cualquier momento desde los ajustes de su perfil.<a href="/assests/PoliticaCookies.pdf" target="blank">
          Ver política de cookies</a></p>
          <button class="btn btn-primary w-100" v-on:click="crearCookies">Aceptar todo</button>
        </div>
      </div>
    </div>
  </div>

  
  
</div>
</template>

<script>
import TutorialDataService from "../services/CommentService";

export default {
    name: "add-comment",

  data() {
    return {
      visible: true,
     comment: {
        email: "",
        comentario: "",
        published: false,
      },
      submitted: false
    };
  },
  computed: {
    cookie() {
      return this.visible;
    },
  },
  methods: {
    comprobar() {
      if (this.checkCookie("Aceptarcookie")) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    denegarCookie(){
        this.visible = false;
    },
     saveTutorial() {
      var data = {
        email: this.comment.email,
        comentario: this.comment.comentario,
        published: false,
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
    crearCookies() {
      if (!this.checkCookie("Aceptarcookie")) {
        this.setCookie("Aceptarcookie", "true", 3);
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    },
    checkCookie(cname) {
      var resul = false;
      var username = this.getCookie(cname);
      if (username != "") {
        resul = true;
      }
      return resul;
    },
  },
  beforeMount() {
    this.comprobar();
  },
};
</script>

<style scoped>
  p{
    font-family: "Letter"
  }
  h2, h4{
    font-family: "Title"
  }
  .pphoto{
    width: 100%;
  }
.button-fixed{
      bottom: 0;
      position: fixed;
      right: 0;
      border-radius: 4px;
      }
      .fas{
      cursor: pointer;
      }
      .bg-custom{
      background-color:#95949e;
      }
      .formulario{
        border: solid 1px #ced4da;
      border-radius: 10px;
        padding: 3%;
      }
      label{
        color: black;
      }
      
</style>

