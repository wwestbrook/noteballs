/* eslint-disable prettier/prettier */
<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      label="Add a new note"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          @click="addNote"
          :disabled="!newNote"
        >
          Save
        </button>
      </template>
    </AddEditNote>
  </div>
  <NoteItem
    v-for="note in store.notes"
    :key="note.id"
    :note="note"
    @deleteClicked="deleteNote"
  />
</template>

<script setup>
import { ref } from 'vue';
import NoteItem from '@/components/notes/NoteItem.vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useNotesStore } from '@/stores/notesStore';
import { useWatchCharacters } from '@/use/useWatchCharacters'

const newNote = ref('');
const addEditNoteRef = ref(null);

const store = useNotesStore();

const addNote = () => {
  store.addNote(newNote.value);

  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
};

const deleteNote = (id) => {
  store.deleteNote(id);
};

/*
  watch

watch(newNote, (newVal, oldVal) => {
  if (newVal.length >= 100) {
    alert('Only 100 characters allowed gosh darnit!!!');
  }
})

*/
useWatchCharacters(newNote, 200);
</script>
