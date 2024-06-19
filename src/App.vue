<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Divisasview from './views/divisasview.vue'
import Calculatorview from './views/Calculatorview.vue';
import Tiempoview from './views/Tiempoview.vue';
</script>

<template>
  <Header>
    <nav>
      <RouterLink to="/">Calculator</RouterLink>
      <RouterLink to="/divisas">Divisas</RouterLink>
      <RouterLink to="/tiempo">Tiempo</RouterLink>
    </nav>
  </Header>

  <RouterView />
  <Footer />
</template>


<style scoped>
footer{
  display: flex;
  justify-content: flex-end;
}
</style>
