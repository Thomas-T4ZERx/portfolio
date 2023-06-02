<template>
  <section id="presentation"></section>
    <div>
    <v-container>
    <h1 class="titleH1">{{data.title}}</h1>

    <br> <br> 
    <div v-if="isSmallScreen">
      
  <v-card class="mx-auto" max-width="1500">
    <v-card-item>
      <v-row align="start">
        <v-col cols="12">
          <div>
            <v-img
          src="@/pictures/profil.jpg"
      
          ></v-img>
          <br>
            <div class="text-overline mb-1" style="color: #ff9800">
                {{data.hello}}
            </div>
         
            <div class="text-caption">
              <div v-html="data.texte"  style=" font-size: 112%;"></div>
             </div>
             <br>
             <div>
  <div>
    <div>
     <h4> Me contacter</h4>
   
     <v-btn size="small" append-icon="mdi-email" :href="'mailto:' + data.email" style="bottom: 2px;" >Email</v-btn>
      
      <br>
      Téléphone: {{ data.phone }}
      <br>
      Ville: {{ data.city }}
      <br>
      Languages: {{ data.langages }}
      <br>
    </div>
    <br>
    <div>
      <h4>{{ data.networks }}</h4>
      <br>
      <div>
      <v-btn
        v-for="icon in data.icone"
        :key="icon"
        class="mx-4"
        :icon="icon.icone"
        :href="icon.url"
        target="_blank"
      ></v-btn>
    </div>
    </div>
  </div>
  <br>
</div>
          </div>
        </v-col>
        
      </v-row>
    </v-card-item>

  </v-card>
    </div>
        <div v-else>

  <v-card class="mx-auto" max-width="1500">
    <v-card-item>
      <v-row align="start">
        <v-col cols="4">
          <v-img
          src="@/pictures/profil.jpg"
            height="500"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <div>
            <div class="text-overline mb-1" style="color: #ff9800">
                {{data.hello}}
            </div>
         
            <div class="text-caption">
              <div v-html="data.texte"  style=" font-size: 112%;"></div>
             </div>
             <br>
             <div>
  <div class="d-flex justify-end">
    <div>
     <h4> Me contacter</h4>
   
    <v-btn size="small" append-icon="mdi-email" :href="'mailto:' + data.email" style="bottom: 2px;" >Email</v-btn>
    <br> 
      Téléphone: {{ data.phone }}
      <br>
      Ville: {{ data.city }}
      <br>
      Languages: {{ data.langages }}
      <br>
    </div>
    <div class="ml-auto">
      <h4 style="margin-left: -270px;">{{ data.networks }}</h4>
      <br>
      <div style="margin-left: -300px;">
      <v-btn
        v-for="icon in data.icone"
        :key="icon"
        class="mx-4"
        :icon="icon.icone"
        :href="icon.url"
        target="_blank"
      ></v-btn>
    </div>
    </div>
  </div>
  <br>
</div>
          </div>
        </v-col>
        
      </v-row>
    </v-card-item>

  </v-card>
</div>
</v-container>
</div>
</template>

<script>
import data  from '@/data/data.js';

export default {
  data() {
    return {
      data: data.presentation,
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
   this.isSmallScreen = window.innerWidth < 830; // Modifier 768 selon votre condition de taille d'écran
 },
},
};
</script>