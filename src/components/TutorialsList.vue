<template>
<div>
     <header>
    <div class="px-3 py-2 bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none" href="/admin">
          <img src="/assests/prisionweb.png" alt="" width="110" class="d-inline-block align-text-top">
        </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/gestionpresos" class="nav-link"> 
                <img class="bi d-block mx-auto mb-1" src="/assests/pen-to-square-solid.svg" title="Administración" width="24" height="24">
              </a>
            </li>
            <li>
              <a href="/solicitudes" class="nav-link"> 
                <img class="bi d-block mx-auto mb-1" src="/assests/file-lines-solid.svg" title="Solicitudes" width="24" height="24">
              </a>
            </li>
            <li>
              <a href="/assests/NormativaAdmin.pdf" target="blank" class="nav-link">
                <img class="bi d-block mx-auto mb-1" src="/assests/circle-info-solid.svg" title="Normativa" width="24" height="24">
              </a>
            </li>
            <li>
              <a href="/iniciarsesion" @click="eliminarCookie" class="nav-link">
                <img class="bi d-block mx-auto mb-1" src="/assests/arrow-right-from-bracket-solid.svg" title="Cerrar Sesión" width="24" height="24">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <div class="caja">
   <div class="list row">
    <div class="col-md-6">
      <h3 class="mb-3">Solicitudes recibidas</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.email }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Selecciona una solicitud...</p>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
import TutorialDetails from "./Tutorial";
export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      unsubscribe: null
    };
  },
  methods: {
    onDataChange(items) {
      let _tutorials = [];
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _tutorials.push({
          id: id,
          preso: data.preso,
          published: data.published,
          email: data.email
        });
      });
      this.tutorials = _tutorials;
    },
    eliminarCookie(){
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },
    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
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
      var email = this.getCookie();
      if(!logeado || email!="admin@admin.com"){
        window.location.href = "/";
      }
    }
  },
  beforeMount() {
    this.redirigir();
  
  },
  mounted() {
    this.unsubscribe = TutorialDataService.getAll().orderBy("email", "asc").onSnapshot(this.onDataChange);
  },
  beforeUnmount() {
    this.unsubscribe();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.caja{
  margin-top: 50px;
}
p{
    font-family: "Letter"
  }
  h2, h3, h4, h5, h6{
    font-family: "Title"
  }
</style>