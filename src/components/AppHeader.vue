<template>
  <header>
    <!-- Intégration de la section nav -->
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#home" class="nav__link">
            <img src="../assets/Imgs/Home.webp" class="nav__image nav__image--home" alt="Home" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#services" class="nav__link">
            <img src="../assets/Imgs/Services.webp" class="nav__image nav__image--advertising" alt="Services" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#portfolio" class="nav__link">
            <img src="../assets/Imgs/Portfolio.webp" class="nav__image nav__image--portfolio" alt="Portfolio" />
          </a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link">
            <img src="../assets/Imgs/Contact.png" class="nav__image nav__image--telephone" alt="Contact" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
