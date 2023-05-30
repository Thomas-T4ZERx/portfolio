<template>
    <section id="skills"></section>
    <br> <br> 
    <div>
      <v-container>
        <h1 class="titleH1">{{ data.title }}</h1>
        <br> <br> 
        <div v-if="isSmallScreen">
      <!-- Afficher une version différente pour les petits écrans -->
      <v-row>
    <v-col
      v-for="skill in data.skills"
      :key="skill.id"
      cols="6"
      class="skill-col"
    >
      <v-img
        :src="'src/pictures/' + skill.picture"
        :lazy-src="'src/pictures/' + skill.picture"
        aspect-ratio="1"
        class="PicturesSkills"
      ></v-img>
      <br>
      <span class="skill-title">{{ skill.title }}</span>
    </v-col>
  </v-row>
    </div>

    <div v-else>
        <v-row>
    <v-col
      v-for="skill in data.skills"
      :key="skill.id"
      cols="2"
      class="skill-col"
    >
      <v-img
        :src="'src/pictures/' + skill.picture"
        :lazy-src="'src/pictures/' + skill.picture"
        aspect-ratio="1"
        class="PicturesSkills"
      ></v-img>
      <br>
      <span class="skill-title">{{ skill.title }}</span>
    </v-col>
  </v-row>
</div>
      </v-container>
    </div>
  </template>

<script>
import experiencesData from '@/data/data.js';

export default {
  data() {
    return {
      data: experiencesData.skills,
      isSmallScreen: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 860; // Modifier 768 selon votre condition de taille d'écran
    },
  },
};
</script>