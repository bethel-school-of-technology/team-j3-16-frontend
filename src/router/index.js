import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/HomeView.vue');
const ProfileView = () => import('../views/ProfileView.vue');
const ScriptureView = () => import('../views/ScriptureView.vue');
const LoginView = () => import('../views/LoginView.vue');
const SignupView = () => import('../views/SignupView.vue');

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/scripture', name: 'scripture', component: ScriptureView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignupView },
  { path: '/testimony', name: 'testimony', component: () => import('../views/TestimonyView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
