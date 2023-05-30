<template>
  <section id="formations">
    <br> <br> 
    <div>
 
    <h1 class="titleH1">{{ data.title }}</h1>
    <br> <br> 

    <div v-if="isSmallScreen">
   <v-list lines="three">
  <v-list-item 
  v-for="formation in data.formations" :key="formation.id" class="text-center"
  >
  <div>
           <div class="text-h4">  {{formation.school}}</div>
           <div class="text-h5">   {{ formation.city }} - {{ formation.date }}</div>
           <p>
            {{ formation.diplome }}
           </p>
         </div>
</v-list-item>
</v-list>
    </div>

    <div v-else>
      <!-- Afficher la version normale pour les autres écrans -->
      <v-timeline direction="horizontal" line-inset="12">
        <v-timeline-item v-for="formation in data.formations" :key="formation.id">
          <template v-slot:opposite>
            <p style="text-align: center;">
              <div class="text-h6">{{ formation.school }}</div>
              {{ formation.city }} - {{ formation.date }} <br>
              {{ formation.diplome }}
            </p>
          </template>
        </v-timeline-item>
      </v-timeline>
    </div> </div>
  </section>
  
</template>

<script>
import formationsData from '@/data/data.js';

export default {
  data() {
    return {
      data: formationsData.formations,
      isSmallScreen: false,
    };
  },
  mounted() {
    // Vérifier la taille de l'écran lors du montage du composant
    this.checkScreenSize();
    // Ajouter un écouteur pour vérifier la taille de l'écran lors du redimensionnement de la fenêtre
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    // Supprimer l'écouteur lors de la destruction du composant pour éviter les fuites de mémoire
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      // Mettre à jour la variable isSmallScreen en fonction de la taille de l'écran
      this.isSmallScreen = window.innerWidth < 768; // Modifier 768 selon votre condition de taille d'écran
    },
  },
};
</script>