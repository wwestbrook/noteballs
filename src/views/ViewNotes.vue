/* eslint-disable prettier/prettier */
<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="comment"
            class="textarea"
            placeholder="Add a new note."
            ref="newNoteRef"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            @click="addNote"
            :disabled="!comment"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <div
      class="card mb-4"
      v-for="note in notes"
      :key="note.id"
    >
      <div class="card-content">
        <div class="content">
          {{ note.comment }}
        </div>
      </div>
      <footer class="card-footer">
        <a
          href="#"
          class="card-footer-item"
          >Edit</a
        >
        <a
          href="#"
          class="card-footer-item"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const comment = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 1,
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus, dolorem excepturi, est quas iste rem velit consequuntur tempore perferendis pariatur magnam porro deleniti que'
  },
  {
    id: 2,
    comment: 'this is the second comment'
  },
  {
    id: 3,
    comment: 'THIRD comment right here folks!'
  }
]);

const addNote = () => {
  let id = new Date().getTime();

  let note = {
    id,
    comment: comment.value
  };

  notes.value.unshift(note);
  comment.value = '';
  newNoteRef.value.focus();
};
</script>
