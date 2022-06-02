<template>
  <div v-if="currentComment" class="edit-form">
    <h4>Ver mensaje</h4>
    <form>
    
      <div class="form-group">
        <label for="preso">Email del usuario</label>
        <input
        readonly
          type="email"
          class="form-control"
          id="email"
          v-model="currentComment.email"
        />
      </div>
      <div class="form-group mt-2">
        <label for="comentario">Problema del usuario</label>
        <textarea
        readonly
          type="text"
          class="form-control"
          id="comentario"
          v-model="currentComment.comentario"
        />
      </div>
      <div class="form-group mt-2">
        <label><strong>Estado:</strong></label>
        {{ currentComment.published ? "Published" : "Pendiente de revisión" }}
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
import TutorialDataService from "../services/CommentService";
export default {
  name: "comment-name",
  props: ["comment"],
  data() {
    return {
      currentComment: null,
      message: "",
    };
  },
  watch: {
    comment: function(comment) {
      this.currentComment = { ...comment };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentComment.id, {
        published: status,
      })
        .then(() => {
          this.currentComment.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentComment.id)
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
    this.currentComment = { ...this.comment }
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>