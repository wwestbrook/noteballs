<template>
  <div class="edit-notes">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      label="Edit Note"
      placeholderText="wtf, this shouldnt be empty"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="router.back()"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          @click="handleSaveClicked"
          :disabled="!noteContent"
        >
          Save
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '../components/notes/AddEditNote.vue';
import { useNotesStore } from '@/stores/notesStore';

const store = useNotesStore();
const route = useRoute();
const router = useRouter();
const noteContent = ref('');

noteContent.value = store.getNote(parseInt(route.params.id)).content;

const handleSaveClicked = () => {
  // console.log('handleSaveClicked');
  store.updateNote(parseInt(route.params.id), noteContent.value);
  router.back();
};
</script>
