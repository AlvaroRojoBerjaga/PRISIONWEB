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

  <nav class="mt-3">
    <router-link to="/gestionpresos">Presos</router-link> |
    <router-link to="/gestionguardias">Guardias</router-link> 
  </nav>

<div class="container">
      <h2 class="mt-3 mb-3">Registro de guardias</h2>
      <table class="table">
        <thead>
          <th>Código</th>
          <th>Nombre</th>
          <th>Zona</th>
          <th></th>
        </thead>
        <tbody>
          <tr :class="{ active: index == currentIndex }"
          v-for="(registro, index) in registros"
          :key="index">
            <td v-if="registro.tipo === 'guardia'">{{ registro.codigo }}</td>
            <td v-if="registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            <td v-if="registro.tipo === 'guardia'">{{ registro.zona }}</td>
            <td v-if="registro.tipo === 'guardia'">
                <button @click.prevent="eliminarRegistro(registro.id)" type="submit" class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="formulario">
    <form @submit.prevent="guardarRegistro">
        <h2>Añadir guardia</h2>
        <div class="mb-1 form-group">
            <label for="exampleInputCodigoA" class="form-label ">Código del guardia:</label>
            <input type="text" class="form-control" pattern="[G][R][0-9]{8}" id="exampleInputCodigoA" placeholder="GR00000000" aria-describedby="codigoHelp" v-model="registro.codigo" required>
        </div>
        <div class="mb-3 form-group">
            <label for="exampleInputName" class="form-label">Nombre del guardia:</label>
            <input type="tel" class="form-control" id="exampleInputName" placeholder="Nombre completo"  v-model="registro.nombre" aria-describedby="nameHelp">
        </div>
        <div class="form-goup mb-3">
            <label for="exampleInputZonaA" class="form-label ">Zona donde se ubica:</label>
            <select class="form-control mb-1" id="exampleInputZonaA" aria-label="Default select example"  v-model="registro.zona">
                <option value="BLOQUE A">BLOQUE A</option>
                <option value="BLOQUE B">BLOQUE B</option>
                <option value="BLOQUE C">BLOQUE C</option>
                <option value="TORRE A">TORRE A</option>
                <option value="TORRE B">TORRE B</option>
                <option value="TORRE C">TORRE C</option>
                <option value="TORRE D">TORRE D</option>
                <option value="VISITAS">VISITAS</option>
                <option value="AISLAMIENTO">AISLAMIENTO</option>
            </select>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Crear guardia</button>
        </div>
    </form>
      </div>
     



    </div>
  </div>

</template>

<script>
import DataService from "../services/DataService";

export default {
   setup() {
        return{
            registro:{
                codigo:"",
                nombre:"",
                zona:"BLOQUE A",
                tipo:"guardia"
            }
        }
        
    },
  data() {
    return {
      registros: [],
      currentRegistro: null,
      currentIndex: -1,
      unsubscribe: null,
    };
  },
  methods: {
    onDataChange(items) {
      let _registros = [];
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _registros.push({
          id: id,
          codigo: data.codigo,
          nombre: data.nombre,
          zona: data.zona,
          tipo: data.tipo,
          published: data.published,
        });
      });
      this.registros = _registros;
    },
    eliminarCookie(){
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },
    guardarRegistro(){
            var data={
                codigo:this.registro.codigo,
                nombre:this.registro.nombre,
                zona:this.registro.zona,
                tipo:this.registro.tipo,
            };
            DataService.create(data)
            .then(()=>{
               console.log("Usuario creado correctamente");
            })
        },
        eliminarRegistro(id) {
          console.log(id);
          DataService.delete(id)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
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
    this.unsubscribe = DataService.getAll()
      .orderBy("zona", "asc")
      .onSnapshot(this.onDataChange);
  },
};
</script>

<style scoped>

#formulario{
        border: solid 10px rgb(223, 223, 223);
        border-radius: 5px;
        padding: 2%;
    }
    h2{
      text-align: center;
    }
    nav {
  text-align: center;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
label{
    color: #252b31;
}

nav a.router-link-exact-active {
  color: #0084ff;
}
</style>