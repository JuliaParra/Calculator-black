<template>
  <div>
    <h1>Weather in {{ city }}</h1>
    <div v-if="weather">
      <p>Province: {{ weather.provincia }}</p>
      <p>Temperature: {{ weather.temperatura_actual }}°C</p>
      <p>Description: {{ weather.descripcion }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script> 
import Tiempo from '@/components/tiempo.vue'; 

 export default { components: { Tiempo },};
 
 </script> 

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
