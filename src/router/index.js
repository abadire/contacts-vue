import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Edit from '../views/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/id:index',
    name: 'Edit',
    component: Edit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
