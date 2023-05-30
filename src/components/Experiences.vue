<template>
  <section id="experiences">
    <br> <br> 
    <h1 class="titleH1">{{ data.title }}</h1>
    <br> <br> 

    <div v-if="isSmallScreen">
      <!-- Afficher une version différente pour les petits écrans -->
      <v-list lines="three">
  <v-list-item 
  v-for="experience in data.experiences" :key="experience.id"
  class="text-center"
  >
  <div>
           <div class="text-h4">  {{experience.entreprise}}</div>
           <div class="text-h5">   {{ experience.post }}</div>
           <div style="font-size: 120%">  {{ experience.date }}</div>
           <p>
            {{ experience.description }}
           </p>
         </div>
</v-list-item>
</v-list>
    </div>

    <div v-else>
      <!-- Afficher la version normale pour les autres écrans -->
      <section v-scrollanimation>
        <v-container>
          <v-timeline align="start">
            <v-timeline-item v-for="experience in data.experiences" :key="experience.id">
              <template v-slot:opposite>
                <div>
                  <div class="text-h4">{{ experience.entreprise }}</div>
                  <div class="text-h5">{{ experience.post }}</div>
                  <div class="text-h6">{{ experience.date }}</div>
                  <p>{{ experience.description }}</p>
                </div>
              </template>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>
    </div>
  </section>
</template>
  
<script>
import experiencesData from '@/data/data.js';

export default {
  data() {
    return {
      data: experiencesData.experiences,
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
      this.isSmallScreen = window.innerWidth < 768; // Modifier 768 selon votre condition de taille d'écran
    },
  },
};
</script>