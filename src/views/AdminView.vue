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
  <div class="text-center">
    <img class="mt-5 img-fluid" src="/assests/prisionmap.jpg" usemap="#image-map">
  
   <map name="image-map">
    <area data-bs-toggle="modal" data-bs-target="#Modal1"  alt="Bloque A" title="Bloque A"  coords="62,104,132,105,133,276,64,276" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal2" alt="Bloque B" title="Bloque B"  coords="134,34,133,104,303,105,305,33" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal3" alt="Bloque C" title="Bloque C" coords="1159,175,1227,175,1229,346,1160,344" shape="poly">
    <area  data-bs-toggle="modal" data-bs-target="#Modal4" alt="Torre A" title="Torre A" coords="10,11,24,10,27,28,11,26" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal5" alt="Torre B" title="Torre B" coords="1221,9,1236,9,1239,26,1223,25" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal6" alt="Torre C" title="Torre C" coords="9,520,28,520,30,540,7,539" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal7" alt="Torre D" title="Torre D" coords="1218,521,1235,520,1240,539,1221,540" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal8" alt="Visitas" title="Visitas" coords="687,486,686,531,851,531,854,486" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal9" alt="Aislamiento" title="Aislamiento" coords="1088,15,1160,18,1161,173,1089,174" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal10" alt="Comedor" title="Comedor" coords="455,17,455,172,794,169,793,18" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal11" alt="Enfermería" title="Enfermería" coords="832,18,833,173,1047,172,1048,18" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal12" alt="Almacén" title="Almacén" coords="307,531,306,486,392,485,394,530" shape="poly">
    <area data-bs-toggle="modal" data-bs-target="#Modal13" alt="Lavandería" title="Lavandería" coords="405,486,405,532,510,530,508,486" shape="poly">
</map>

 <div class="modal fade" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">BLOQUE A</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Presos</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE A' && registro.tipo === 'preso'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE A' && registro.tipo === 'preso'">{{ registro.nombre }}</td>
            </tr>
        </table>
        <h5>Guardias</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE A' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE A' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">BLOQUE B</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <h5>Presos</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE B' && registro.tipo === 'preso'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE B' && registro.tipo === 'preso'">{{ registro.nombre }}</td>
            </tr>
        </table>
        <h5>Guardias</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE B' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE B' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">BLOQUE C</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <h5>Presos</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE C' && registro.tipo === 'preso'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE C' && registro.tipo === 'preso'">{{ registro.nombre }}</td>
            </tr>
        </table>
        <h5>Guardias</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'BLOQUE C' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'BLOQUE C' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">TORRE A</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Guardia</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'TORRE A' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'TORRE A' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">TORRE B</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Guardia</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'TORRE B' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'TORRE B' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">TORRE C</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Guardia</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'TORRE C' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'TORRE C' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">TORRE D</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Guardia</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'TORRE D' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'TORRE D' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">VISITAS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Guardias</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'VISITAS' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'VISITAS' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">AISLAMIENTO</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <h5>Presos</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'AISLAMIENTO' && registro.tipo === 'preso'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'AISLAMIENTO' && registro.tipo === 'preso'">{{ registro.nombre }}</td>
            </tr>
        </table>
        <h5>Guardias</h5>
        <table class="table table-sm">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
            </tr>
            <tr :class="{ active: index == currentIndex }"
                v-for="(registro, index) in registros"
                :key="index">
              <td v-if="registro.zona === 'AISLAMIENTO' && registro.tipo === 'guardia'">{{ registro.codigo }}</td>
              <td v-if="registro.zona === 'AISLAMIENTO' && registro.tipo === 'guardia'">{{ registro.nombre }}</td>
            </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">COMEDOR</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Lugar para la preparación de comida para presos.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ENFERMERÍA</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Lugar donde tratar ante posibles daños, medicar, etc.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ALMACÉN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Lugar para almacenar todas las herramientas, materiales deportivos, etc.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
 <div class="modal fade" id="Modal13" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">LAVANDERÍA</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Lugar para lavar toda la ropa de los presos y guardas.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

  </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default{

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
      .orderBy("codigo", "asc")
      .onSnapshot(this.onDataChange);
  },

}
</script>