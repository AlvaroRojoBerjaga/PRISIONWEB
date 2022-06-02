<template><div>
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
          <form>
              <h2>CUENTA DEL USUARIO Y DATOS</h2>
             <div class="mt-4"> 
               <h4>Datos personales</h4>
            <div class="form-floating mb-2">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" readonly>
              <label for="floatingPassword">Correo electrónico</label>
            </div>
             </div>
            <div class="mt-3">
              <h4 class="mb-2">Privacidad</h4>
              <p>Revisar la <a href="/assests/PoliticaPrivacidad.pdf" target="blank">Política de Privacidad</a></p>
              <h4 class="mb-2 mt-2">Cookies</h4>
              <p>Revisar la <a href="/assests/PoliticaCookies.pdf" target="blank">Política de Cookies</a></p>
              <p><a class="ck" href="" @click="eliminarCookies"><b>Eliminar las cookies aceptadas</b></a></p>
            </div>     
            <div>
              <a class="btn btn-secondary mt-2" @click="eliminarCookie2" href="/iniciarsesion" role="button">Cerrar sesión</a>
            </div>
          </form>
        </div> 
    </div>
  
  
</div>
    
</template>

<script>
  export default{
    data(){
    },
    methods: {
      eliminarCookies(){
        document.cookie = "Aceptarcookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },
      eliminarCookie2(){
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
  mounted() {
    var email = this.getCookie();
    var user = document.getElementById("floatingInput");
    user.value=email;
  }
  }
</script>

<style scoped>
.btn-secondary{
  background-color: white;
  border-color: white;
  font-size: large;
  font-weight: bolder;
  color: rgb(255, 0, 0);
}
.btn-secondary:hover{
  color: #da2727;
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
  h2, h3{
    font-family: "Title"
  }
.ck{
  color: black;
  text-decoration: none;
}
</style>