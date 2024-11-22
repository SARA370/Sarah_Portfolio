<template>
  <div>
    <!-- Header Section avec Logo, Date, Jour et Horloge -->
    <div :class="['header-content', { scrolled: hasScrolled }]">
      <div class="header-content-left">
        <router-link to="/">
          <img src="../assets/Logo.png" alt="Logo" class="logo" />
        </router-link>
      </div>

      <div class="header-content-right">
        <button @click="toggleTheme">
          <img
            :src="isDarkMode ? '../assets/Imgs/Sun.webp' : '../assets/Imgs/Moon.webp'"
            alt="Toggle Theme"
            class="icon"
          />
        </button>
        <button @click="toggleLanguage">
          {{ language === "en" ? "EN" : "FR" }}
        </button>
        <div class="info date-time-container">
          <p class="current-date">{{ currentDate }}</p>
          <p class="current-time">{{ currentTime }}</p>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero__centre">
        <div class="info-box">
          <img
            src="../assets/Imgs/Personal-photo.webp"
            alt="Profile Picture"
            class="profile-image"
          />
          <div class="circle-available"></div>
          <h1 class="info-box__title">Hello, I'm Sarah 👋</h1>
          <h2 class="info-box__subtitle">Junior Full-Stack Developer</h2>
          <p class="info-box__description">
            Crafting <strong>pixel-perfect</strong>, <strong>engaging</strong>, and
            <strong>accessible</strong> digital experiences that captivate and inspire!
            <br /><br />
            From front-end to back-end, I handle it all with precision and creativity.
          </p>
          <div class="info-box__buttons">
            <button class="info-box__button info-box__book-a-call">
              Book a Call
            </button>
            <button class="info-box__button info-box__button--cv">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div class="social-icons">
        <ul class="social-icons__list">
          <li class="social-icons__item social-icons__item--youtube">
            <a
              href="https://www.youtube.com/@LifeBits-h7m/shorts"
              class="social-icons__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icons__content">
                <span>YouTube</span>
                <img
                  class="social-icons__icon"
                  src="../assets/Imgs/youtube-icone.webp"
                  alt="YouTube Icon"
                />
              </div>
            </a>
          </li>
          <li class="social-icons__item social-icons__item--github">
            <a
              href="https://github.com/SARA370"
              class="social-icons__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icons__content">
                <span>GitHub</span>
                <img
                  class="social-icons__icon"
                  src="../assets/Imgs/github-icone.webp"
                  alt="GitHub Icon"
                />
              </div>
            </a>
          </li>
          <li class="social-icons__item social-icons__item--linkedin">
            <a
              href="https://www.linkedin.com/in/sarah-al-rashid-92ab2a220/"
              class="social-icons__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icons__content">
                <span>LinkedIn</span>
                <img
                  class="social-icons__icon"
                  src="../assets/Imgs/Linkedin-icone.webp"
                  alt="LinkedIn Icon"
                />
              </div>
            </a>
          </li>
          <li class="social-icons__item social-icons__item--behance">
            <a
              href="https://www.behance.net/"
              class="social-icons__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="social-icons__content">
                <span>Behance</span>
                <img
                  class="social-icons__icon"
                  src="../assets/Imgs/Behance-icone.webp"
                  alt="Behance Icon"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="services-section__title">
        <h2>
          <span>Services</span>
          <span class="services-section__bg-text">SERVICES</span>
        </h2>
      </div>
      <div class="services-section__list">
        <!-- Service Cards -->
        <div
          class="services-section__item"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="services-section__card">
            <div class="services-section__card-front">
              <span class="services-section__number">{{ index + 1 }}</span>
              <img
                :src="service.icon"
                :alt="service.title"
                class="services-section__icon"
              />
              <h3>{{ service.title }}</h3>
              <p class="services-section__description">
                {{ service.description }}
              </p>
            </div>
            <div class="services-section__card-back">
              <div v-for="category in service.details" :key="category.title">
                <h4>{{ category.title }}</h4>
                <div class="tool-list">
                  <span class="tool-item" v-for="tool in category.tools" :key="tool">
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <div class="portfolio" id="portfolio">
      <div class="portfolio__title">
        <h2>
          Portfolio <span class="portfolio__bg-text">PORTFOLIO</span>
        </h2>
      </div>
      <div class="portfolio__buttons">
        <button
          class="portfolio__buttons__button"
          @click="filterCategory('All')"
        >
          All
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="portfolio__buttons__button"
          @click="filterCategory(category)"
        >
          {{ category }}
        </button>
      </div>
      <div class="portfolio__images">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          class="portfolio__image-item"
        >
          <div class="portfolio__image-wrapper">
            <img :src="image.src" :alt="image.alt" class="portfolio__image" />
            <div class="portfolio__overlay">
              <h3 class="portfolio__project-name">{{ image.alt }}</h3>
              <div class="portfolio__icons">
                <img
                  v-for="icon in image.icons"
                  :key="icon.alt"
                  :src="icon.src"
                  :alt="icon.alt"
                  class="portfolio__icon"
                />
              </div>
              <a :href="image.projectLink" class="portfolio__view-button"
                >Voir le projet</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="contact-section__content">
        <div class="contact-section__title">
          <h2>
            <span>Contact</span>
            <span class="bg-text">CONTACT</span>
          </h2>
        </div>

        <!-- Messages de succès et d'erreur -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <!-- Formulaire de Contact -->
        <div class="contact-section__form">
          <form class="form__container" @submit.prevent="submitForm">
            <!-- Champ Nom -->
            <div class="form__input-container">
              <input
                v-model="form.name"
                type="text"
                name="name"
                class="form__input"
                id="Name"
                required
                placeholder=" "
              />
              <label for="Name">Nom</label>
            </div>

            <!-- Champ Email -->
            <div class="form__input-container">
              <input
                v-model="form.email"
                type="email"
                name="email"
                class="form__input"
                id="Email"
                required
                placeholder=" "
              />
              <label for="Email">Email</label>
            </div>

            <!-- Champ Sujet -->
            <div class="form__input-container">
              <input
                v-model="form.subject"
                type="text"
                name="subject"
                class="form__input"
                id="Subject"
                required
                placeholder=" "
              />
              <label for="Subject">Sujet</label>
            </div>

            <!-- Champ Téléphone -->
            <div class="form__input-container">
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                class="form__input"
                id="Phone"
                placeholder=" "
              />
              <label for="Phone">Téléphone</label>
            </div>

            <!-- Champ Message -->
            <div class="form__input-container form__textarea-container">
              <textarea
                v-model="form.message"
                id="Message"
                class="form__input form__textarea"
                required
                placeholder=" "
              ></textarea>
              <label for="Message">Message</label>
            </div>

            <!-- Bouton Soumettre -->
            <button type="submit" class="form__submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
// Import des images de projets et des icônes de technologies
import illustrationImage from "../assets/Imgs/Illustration.webp";
import moodboardImage1 from "../assets/Imgs/Moodboard_1.webp";
import moodboardImage2 from "../assets/Imgs/Moodboard_2.webp";
import moodboardImage3 from "../assets/Imgs/Moodborad_3.webp";
import moodboardImage4 from "../assets/Imgs/Moodboard_4.webp";
import charteGraphique1 from "../assets/Imgs/Chartegraphique_1.webp";
import charteGraphique2 from "../assets/Imgs/chartegraphique_2.webp";
import natoursImage from "../assets/Imgs/Natours.webp";
import nexterImage from "../assets/Imgs/nexter.webp";
import omnifoodImage from "../assets/Imgs/Omnifood.webp";
import quoteImage from "../assets/Imgs/quote.webp";
import sociallifeImage from "../assets/Imgs/sociallife.webp";
import spaceImage from "../assets/Imgs/space.webp";
import app3D from "../assets/Imgs/3D.webp";
import eCommerceApp from "../assets/Imgs/E-CommerceApp.webp";
import financeApp from "../assets/Imgs/FianceApp.webp";
import uiAppScreenMockup from "../assets/Imgs/ui_app_screen_mockup.webp";
import walletX from "../assets/Imgs/WalletX.webp";
import weArtApp from "../assets/Imgs/WeArtApp.webp";
import safePregnancyApp from "../assets/Imgs/SafePregnancyApp.webp";

// Import des icônes de technologies
import htmlIcon from "../assets/Imgs/html.webp";
import cssIcon from "../assets/Imgs/css.webp";
import jsIcon from "../assets/Imgs/js.webp";
import indesignIcon from "../assets/Imgs/indesign.webp";
import photoshopIcon from "../assets/Imgs/photoshop.webp";
import canvasIcon from "../assets/Imgs/canva-icon.webp";
import xdIcon from "../assets/Imgs/xd.webp";
import illustratorIcon from "../assets/Imgs/illustrator.webp";

export default {
  data() {
    return {
      selectedCategory: "All",
      isDarkMode: false,
      language: "en",
      currentDate: new Date().toLocaleDateString("fr-FR"),
      currentTime: new Date().toLocaleTimeString("fr-FR"),
      hasScrolled: false,
      form: {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
      },
      successMessage: "",
      errorMessage: "",
      images: [
        // Graphisme - 7 Projets
        { id: 1, src: illustrationImage, alt: "Illustration Project", category: "Graphisme", projectLink: "path-to-illustration", icons: [{ src: indesignIcon, alt: "InDesign" }] },
        { id: 2, src: moodboardImage1, alt: "Moodboard Project 1", category: "Graphisme", projectLink: "path-to-moodboard1", icons: [{ src: photoshopIcon, alt: "Photoshop" }, { src: canvasIcon, alt: "Canvas" }] },
        { id: 3, src: moodboardImage2, alt: "Moodboard Project 2", category: "Graphisme", projectLink: "path-to-moodboard2", icons: [{ src: canvasIcon, alt: "Canvas" }] },
        { id: 4, src: moodboardImage3, alt: "Moodboard Project 3", category: "Graphisme", projectLink: "path-to-moodboard3", icons: [{ src: indesignIcon, alt: "InDesign" }] },
        { id: 5, src: moodboardImage4, alt: "Moodboard Project 4", category: "Graphisme", projectLink: "path-to-moodboard4", icons: [{ src: canvasIcon, alt: "Canvas" }] },
        { id: 6, src: charteGraphique1, alt: "Charte Graphique 1", category: "Graphisme", projectLink: "path-to-charte-graphique1", icons: [{ src: xdIcon, alt: "Adobe XD" }, { src: illustratorIcon, alt: "Illustrator" }, { src: photoshopIcon, alt: "Photoshop" }] },
        { id: 7, src: charteGraphique2, alt: "Charte Graphique 2", category: "Graphisme", projectLink: "path-to-charte-graphique2", icons: [{ src: xdIcon, alt: "Adobe XD" }, { src: illustratorIcon, alt: "Illustrator" }, { src: photoshopIcon, alt: "Photoshop" }] },

        // Code - 6 Projets
        { id: 8, src: natoursImage, category: "Code", alt: "Natours Project", projectLink: "path-to-natours", icons: [{ src: htmlIcon, alt: "HTML" }, { src: cssIcon, alt: "CSS" }] },
        { id: 9, src: nexterImage, category: "Code", alt: "Nexter Project", projectLink: "path-to-nexter", icons: [{ src: htmlIcon, alt: "HTML" }, { src: cssIcon, alt: "CSS" }] },
        { id: 10, src: omnifoodImage, category: "Code", alt: "Omnifood Project", projectLink: "path-to-omnifood", icons: [{ src: htmlIcon, alt: "HTML" }, { src: cssIcon, alt: "CSS" }] },
        { id: 11, src: quoteImage, category: "Code", alt: "Quote Project", projectLink: "path-to-quote", icons: [{ src: jsIcon, alt: "JavaScript" }] },
        { id: 12, src: sociallifeImage, category: "Code", alt: "Sociallife Project", projectLink: "path-to-sociallife", icons: [{ src: htmlIcon, alt: "HTML" }, { src: cssIcon, alt: "CSS" }] },
        { id: 13, src: spaceImage, category: "Code", alt: "Space Project", projectLink: "path-to-space", icons: [{ src: htmlIcon, alt: "HTML" }, { src: cssIcon, alt: "CSS" }, { src: jsIcon, alt: "JavaScript" }] },

        // UI/UX - 7 Projets
        { id: 14, src: app3D, category: "UI/UX", alt: "3D App Project", projectLink: "path-to-3dapp", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 15, src: eCommerceApp, category: "UI/UX", alt: "E-Commerce App", projectLink: "path-to-ecommerce", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 16, src: financeApp, category: "UI/UX", alt: "Finance App", projectLink: "path-to-financeapp", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 17, src: uiAppScreenMockup, category: "UI/UX", alt: "UI App Screen Mockup", projectLink: "path-to-uiapp", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 18, src: walletX, category: "UI/UX", alt: "WalletX", projectLink: "path-to-walletx", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 19, src: weArtApp, category: "UI/UX", alt: "WeArt App", projectLink: "path-to-weart", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
        { id: 20, src: safePregnancyApp, category: "UI/UX", alt: "Safe Pregnancy App", projectLink: "path-to-safepregnancy", icons: [{ src: xdIcon, alt: "Adobe XD" }] },
      ]
    };
  },
  computed: {
    filteredImages() {
      return this.selectedCategory === "All"
        ? this.images
        : this.images.filter((image) => image.category === this.selectedCategory);
    }
  },
  mounted() {
    this.isDarkMode = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
    document.documentElement.classList.toggle("light-mode", !this.isDarkMode);

    window.addEventListener("scroll", this.handleScroll);
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
      document.documentElement.classList.toggle("light-mode", !this.isDarkMode);
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
    },
    toggleLanguage() {
      this.language = this.language === "en" ? "fr" : "en";
      this.updateTime();
    },
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString(
        this.language === "fr" ? "fr-FR" : "en-US",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      );
      this.currentDate = now
        .toLocaleDateString(this.language === "fr" ? "fr-FR" : "en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "short"
        })
        .toUpperCase();
    },
    handleScroll() {
      this.hasScrolled = window.scrollY > 50;
    },
    filterCategory(category) {
      this.selectedCategory = category;
    },
    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        this.successMessage = "Votre message a été envoyé avec succès !";
        this.errorMessage = "";
      } else {
        this.errorMessage = "Veuillez remplir tous les champs obligatoires.";
        this.successMessage = "";
      }
    }
  }
};
</script>

