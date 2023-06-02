<template>
  <v-app>
    <v-main>
      <Navbar />
      <SidePictures/>
      <div class="page-container">
        <div class="content-container">
          <Presentation />
          <Skills />
          <Experiences />
          <Formations />
          <Realisations />
        </div>
      </div>
      <FooterPage />
    </v-main>
  </v-app>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import SidePictures from '@/components/SidePictures.vue'
  import Presentation from '@/components/Presentation.vue'
  import Skills from '@/components/Skills.vue'
  import Experiences from '@/components/Experiences.vue'
  import Formations from '@/components/Formations.vue'
  import Realisations from '@/components/Realisations.vue'
  import FooterPage from '@/components/Footer.vue'
  
</script>

<style>
@import '@/css/style.css';

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-container {
  width: 100%;
  max-width: 1500px;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .content-container {
    padding: 10px;
  }
}
</style>












