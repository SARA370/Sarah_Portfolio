// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.scss'; // Styles globaux avant tout le reste

// Importez uniquement Firestore depuis firebase.js
import { db } from './firebase';

// Création de l'application Vue
const app = createApp(App);

// Injectez Firestore dans l'application pour qu'il soit accessible partout
app.provide('db', db);

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});
document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// Utilisez le router et montez l'application
app.use(router);
app.mount('#app');
