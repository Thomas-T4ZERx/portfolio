<template>
       <div v-if="isSmallScreen">
    <v-footer class="bg-grey-lighten-4">
      <v-row justify="center" no-gutters>
   
        <v-col class="text-center mt-4" cols="12">
          <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Mentions légales
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <h1 style="text-align:center">MENTIONS LEGALES</h1>
          <v-list-item  v-for="mentions in mentions">
            <div v-html="mentions"  style=" font-size: 112%;"></div>
            <br>
        </v-list-item >
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
    <br/>  <br/>
      <v-dialog
      v-model="dialogPolitique"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
        Politique de confidentialité
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <h1 style="text-align:center">POLITIQUE DE CONFIDENTIALITE</h1>
          <br />
          <v-list-item  v-for="politiques in politiques">
            <div v-html="politiques"  style=" font-size: 112%;"></div>
            <br>
        </v-list-item >
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogPolitique = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <br/>  <br/> 
          {{ new Date().getFullYear() }} — <strong color="#ff9800">Sauvageot Thomas - Portfolio</strong>
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
          <v-dialog
      v-model="dialog"
      width="auto"
      
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Mentions légales
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <h1 style="text-align:center">MENTIONS LEGALES</h1>
          <v-list-item  v-for="mentions in mentions">
            <div v-html="mentions"  style=" font-size: 112%;"></div>
            <br>
        </v-list-item >
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

      <v-dialog
      v-model="dialogPolitique"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          
      style="margin-left:10px"
        >
        Politique de confidentialité
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <h1 style="text-align:center">POLITIQUE DE CONFIDENTIALITE</h1>
          <br />
          <v-list-item  v-for="politiques in politiques">
            <div v-html="politiques"  style=" font-size: 112%;"></div>
            <br>
        </v-list-item >
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogPolitique = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <br/>  <br/>
          {{ new Date().getFullYear() }} — <strong >Sauvageot Thomas - Portfolio</strong>
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
import data from '@/data/data.js';
export default {
  data: () => ({
    mentions: data.mentions,
    politiques: data.politiques,
    dialog: false,
    dialogPolitique: false,
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

