<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Header from './components/header.vue';
import Divisasview from './views/divisasview.vue'
import Calculatorview from './views/Calculatorview.vue';
import Tiempoview from './views/Tiempoview.vue';
</script>

<template>
  <Header/>
  <RouterView />
  <Footer />
</template>


<style scoped>
footer{
  display: flex;
  justify-content: flex-end;
}

</style>
