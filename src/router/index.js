
import { createRouter, createWebHistory } from 'vue-router';
import HomeCard from '../components/home/HomeCard.vue';
import AboutSection from '../components/aboutSection/AboutSection.vue';



const routes = [
  {
    path: '/',
    component: HomeCard
  },
  {
    path: "/about/:title",
    // name: "AboutSection",
    component: AboutSection
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
