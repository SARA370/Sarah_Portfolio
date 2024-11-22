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







import { translations } from "./translations.js";

// État initial
let currentLanguage = "en";

// Fonction pour basculer la langue
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  updateTranslations(); // Met à jour les textes affichés
}

// Fonction pour mettre à jour les textes traduits
function updateTranslations() {
  document.getElementById("hello").textContent = translations[currentLanguage].hello;
  document.getElementById("subtitle").textContent = translations[currentLanguage].subtitle;
  document.getElementById("description").textContent = translations[currentLanguage].description;
  document.getElementById("services").textContent = translations[currentLanguage].services;
  document.getElementById("contact").textContent = translations[currentLanguage].contact;
  document.getElementById("book-call").textContent = translations[currentLanguage].bookCall;
  document.getElementById("download-cv").textContent = translations[currentLanguage].downloadCV;
  document.getElementById("name").textContent = translations[currentLanguage].name;
  document.getElementById("email").textContent = translations[currentLanguage].email;
  document.getElementById("subject").textContent = translations[currentLanguage].subject;
  document.getElementById("phone").textContent = translations[currentLanguage].phone;
  document.getElementById("message").textContent = translations[currentLanguage].message;
  document.getElementById("send").textContent = translations[currentLanguage].send;
}

// Ajouter un écouteur pour le bouton de changement de langue
document.getElementById("toggle-language").addEventListener("click", toggleLanguage);

// Initialisation des traductions par défaut
updateTranslations();
