<template>
<div>
     <header>
    <div class="px-3 py-2 bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none">
          <img src="/assests/prisionweb.png" alt="" width="110" class="d-inline-block align-text-top">
        </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
           
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

   <div class="list row mt-5">
    <div class="col-md-6">
      <h4>Comentarios recibidos</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(comment, index) in comments"
          :key="index"
          @click="setActiveTutorial(comment, index)"
        >
          {{ comment.email }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentComment">
        <comment-details
          :comment="currentComment"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Selecciona un comentario...</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import TutorialDataService from "../services/CommentService";
import CommentDetails from "./Comment";
export default {
  name: "comments-list",
  components: { CommentDetails },
  data() {
    return {
      comments: [],
      currentComment: null,
      currentIndex: -1,
      unsubscribe: null
    };
  },
  methods: {
    onDataChange(items) {
      let _comments = [];
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _comments.push({
          id: id,
          email: data.email,
          comentario: data.comentario,
          published: data.published
          
        });
      });
      this.comments = _comments;
    },
    eliminarCookie(){
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },
    refreshList() {
      this.currentComment = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(comment, index) {
      this.currentComment = comment;
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
      if(!logeado || email!="atencion@cliente.com"){
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
</style>