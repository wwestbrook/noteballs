<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ contentLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        class="card-footer-item"
        :to="`/edit/${note.id}`"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="handleDeleteClicked"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';

/*
props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});

/*
emits
*/
const emit = defineEmits(['deleteClicked']);

const contentLength = computed(() => {
  const length = props.note.content.length;
  const plural = length === 1 ? '' : 's';
  return `${length} character${plural}`;
});

const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id);
};
</script>
