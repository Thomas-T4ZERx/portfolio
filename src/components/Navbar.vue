<template>
   <div v-if="isSmallScreen">
    <v-card   class="text-center">
      <v-list>
        <v-list-item>
          
          <v-toolbar-title>Portfolio Thomas SAUVAGEOT
          <v-btn variant="text" icon="mdi-dots-vertical" flat @click="toggleSections"></v-btn>
        </v-toolbar-title>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card v-if="showSections">
      <v-list>
        <v-list-item v-for="section in sections" :key="section.id" class="text-center">
          <v-btn flat @click="scrollToSection(section.id)">{{ section.label }}</v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
  <div v-else>
    <v-toolbar class="bg-grey-lighten-4">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">SAUVAGEOT Thomas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="scrollToSection('presentation')">Présentation</v-btn>
        <v-btn flat @click="scrollToSection('skills')">Compétences</v-btn>
        <v-btn flat @click="scrollToSection('experiences')">Expériences</v-btn>
        <v-btn flat @click="scrollToSection('formations')">Formations</v-btn>
        <v-btn flat @click="scrollToSection('realisations')">Réalisations</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div> 
</template>


<script>
export default {
  data() {
    return {
      sections: [
        { id: 'presentation', label: 'Présentation' },
        { id: 'skills', label: 'Compétences' },
        { id: 'experiences', label: 'Expériences' },
        { id: 'formations', label: 'Formations' },
        { id: 'realisations', label: 'Réalisations' },
      ],
      isSmallScreen: false,
      drawer: false,
      group: null,
      showSections: false,
    };
   },
   watch: {
      group () {
        this.drawer = false
      },
    },
mounted() {
 this.checkScreenSize();
 window.addEventListener('resize', this.checkScreenSize);
},
beforeDestroy() {
 window.removeEventListener('resize', this.checkScreenSize);
},
methods: {
  toggleSections() {
      this.showSections = !this.showSections;
    },
 checkScreenSize() {
   this.isSmallScreen = window.innerWidth < 768; // Modifier 768 selon votre condition de taille d'écran
 },
 scrollToSection(sectionId) {
      document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
},
};
</script>