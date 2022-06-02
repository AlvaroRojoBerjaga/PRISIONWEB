<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4 class="mt-3 mb-3">Datos del solicitante</h4>
    <form>
      <div class="form-group mb-2">
        <label for="preso">Email del usuario</label>
        <input
        readonly
          type="text"
          class="form-control"
          id="email"
          v-model="currentTutorial.email"
        />
      </div>
      <div class="form-group">
        <label for="preso">Nombre del preso</label>
        <input
        readonly
          type="text"
          class="form-control"
          id="preso"
          v-model="currentTutorial.preso"
        />
      </div>
      <div class="form-group mt-2">
        <label><strong>Estado:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pendiente de revisión" }}
      </div>
    </form>
   
    <button class="badge btn-primary mt-3" @click="deleteTutorial">
      Marcar como completada
    </button>
    
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Selecciona una solicitud...</p>
  </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorial-view",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.id, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
p{
    font-family: "Letter"
  }
  h2, h3, h4, h5, h6{
    font-family: "Title"
  }
</style>