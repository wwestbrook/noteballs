<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Note Count</td>
          <td>{{ store.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Character Count</td>
          <td>{{ store.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/notesStore';
const store = useNotesStore();
</script>
