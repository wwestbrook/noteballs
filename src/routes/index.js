import { createRouter, createWebHistory } from 'vue-router';
import NotesView from '@/views/NotesView.vue';
import StatsView from '@/views/StatsView.vue';
import EditNotesView from '@/views/EditNoteView.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditNotesView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
