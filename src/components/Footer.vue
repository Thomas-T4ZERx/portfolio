<template>
       <div v-if="isSmallScreen">
    <v-footer class="bg-grey-lighten-4">
      <v-row justify="center" no-gutters>
   
        <v-col class="text-center mt-4" cols="12">
            
          {{ new Date().getFullYear() }} — <strong>Sauvageot Thomas - Portfolio</strong>
          <br>
          <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-1"
        :icon="icon.icone"
        variant="plain"
        :href="icon.url"
        target="_blank"
      ></v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </div>
  <div v-else>
  <v-footer class="bg-grey-lighten-4">
      <v-row justify="center" no-gutters>
   
        <v-col class="text-center mt-4" cols="12">
            
          {{ new Date().getFullYear() }} — <strong>Sauvageot Thomas - Portfolio</strong>
        <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-1"
        :icon="icon.icone"
        variant="plain"
        :href="icon.url"
        target="_blank"
      ></v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </div>
  </template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
    icons: [
    {icone: 'mdi-github', 
       url :'https://github.com/Thomas-T4ZERx'
        },
        {icone: 'mdi-linkedin', 
       url :'https://www.linkedin.com/in/thomas-sauvageot-990480130/'
        },
      ],
      isSmallScreen: false,
  }),
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
}
</script>

