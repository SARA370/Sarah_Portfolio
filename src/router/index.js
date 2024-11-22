// Importer les bibliothèques et composants nécessaires
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ErrorPage404 from '../views/ErrorPage404.vue';

// Définir les routes
const routes = [
  { path: '/', component: HomePage },          // La page d'accueil
  { path: '/:catchAll(.*)', component: ErrorPage404 },  // Page 404 pour toutes les autres routes
];

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// // Gérer les inputs de la section contact
// const inputs = document.querySelectorAll(".form__input");

// function focusFunc() {
//   this.parentNode.classList.add("focus");
// }

// function blurFunc() {
//   if (this.value !== "") {
//     this.parentNode.classList.add("focus"); // Garde le label en haut si le champ n'est pas vide
//   } else {
//     this.parentNode.classList.remove("focus"); // Remet le label en place si le champ est vide
//   }
// }

// inputs.forEach(input => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);

//   // Vérifie à l'initialisation pour les champs pré-remplis
//   if (input.value !== "") {
//     input.parentNode.classList.add("focus");
//   }
// });