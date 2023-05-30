<template>
  <section id="realisations"></section>
  <br> <br> 
    <div>
      
      <h1 class="titleH1">{{ data.title }}</h1>
      <br> <br> 

      <div v-if="isSmallScreen">
        <v-hover v-slot="{ isHovering, props }">
  <div>
    <v-card
  v-for="(realisation, index) in data.realisations"
  :key="realisation.id"
  class="mx-auto mb-4"
  color="grey-lighten-4"
  max-width="600"
  v-bind="props"
>
  <v-img
    cover
    class="pictures"
    :src="'src/pictures/' + realisation.image"
  ></v-img>
  <v-card-text class="pt-6">
    <h3 class="text-h4 font-weight-light text-orange mb-2">
      {{ realisation.enterprise }}
    </h3>
    <div class="font-weight-light text-grey text-h6 mb-2">
      {{ realisation.langages }}
    </div>
    <div class="font-weight-light text-h6 mb-2">
      {{ realisation.description }}
    </div>

    <div class="font-weight-light text-h6 mb-2">
      <a v-if="realisation.url" :href="realisation.url" target="_blank">Voir le site</a>
    </div>
  </v-card-text>
</v-card>
    <br> <!-- Saut de ligne -->
  </div>
</v-hover>
      
        </div>
        <div v-else>

      <v-hover v-slot="{ isHovering, props }">
        <div class="card-pair-container">
          <v-card
            v-for="(realisation, index) in data.realisations"
            :key="realisation.id"
            class="mx-auto"
            color="grey-lighten-4"
            max-width="600"
            v-bind="props"
            :class="index % 2 === 0 ? 'first-card' : 'second-card'"
          >
          <v-img
  cover
  class="pictures"
  :src="'src/pictures/' + realisation.image"
></v-img>
            <v-card-text class="pt-6">
              <h3 class="text-h4 font-weight-light text-orange mb-2">
                {{ realisation.enterprise }}
              </h3>
              <div class="font-weight-light text-grey text-h6 mb-2">
                {{ realisation.langages }}
              </div>
              <div class="font-weight-light text-h6 mb-2">
                {{ realisation.description }}
              </div>

              <div class="font-weight-light text-h6 mb-2">
              <a v-if="realisation.url" :href="realisation.url"  target="_blank">Voir le site</a> 
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-hover>

    </div>
    </div>
  </template>

   <script>
   import realisationsData  from '@/data/data.js';
   
   export default {
     data() {
       return {
         data: realisationsData.realisations,
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