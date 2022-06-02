import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTutorial from '../components/AddTutorial.vue'
import TutorialsList from '../components/TutorialsList.vue'
import CommentList from '../components/CommentList.vue'
import PerfilView from '../views/PerfilView.vue'
import AdminView from '../views/AdminView.vue'
import IniciarSesionView from '../views/IniciarSesionView.vue'
import RegistrarseView from '../views/RegistrarseView.vue'
import GestionPresosView from '../views/GestionPresosView.vue'
import GestionGuardiasView from '../views/GestionGuardiasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/solicitudes",
    name: "tutorials",
    component: TutorialsList
  },
  {
    path: "/solicitar",
    name: "add",
    component: AddTutorial
  },
  {
    path: "/perfil",
    name: "PerfilView",
    component: PerfilView
  },
  {
    path: "/admin",
    name: "AdminView",
    component: AdminView
  },
  {
    path: "/iniciarsesion",
    name: "IniciarSesionView",
    component: IniciarSesionView
  },
  {
    path: "/registrarse",
    name: "RegistrarseView",
    component: RegistrarseView
  },
  {
    path: "/gestionpresos",
    name: "GestionPresosView",
    component: GestionPresosView
  },
  {
    path: "/gestionguardias",
    name: "GestionGuardiasView",
    component: GestionGuardiasView
  },
  {
    path: "/atencionalcliente",
    name: "CommentList",
    component: CommentList
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
