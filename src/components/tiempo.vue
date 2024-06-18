<template>
  <div class="weather-app">
    <div v-if="weather" class="weather-info">
      <img :src="weatherImage" :alt="weather.stateSky.description" />
      <div class="weather-details">
        <p>Provincia: {{ weather.nameProvince }}</p>
        <p>Cuidad: {{ weather.name }}</p>
        <p>Cielo: {{ weather.stateSky.description }}</p>
        <p>Temperatura Min: {{ weather.temperatures.min }}°C</p>
        <p>Temperatura Max: {{ weather.temperatures.max }}°C</p>
      </div>
    </div>
    <div v-else class="loading">
      <p>Cargando..</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
      weatherImage: '',
    };
  },
  async created() {
    await this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v2/home');
        const data = await response.json();
        const oviedoWeather = data.ciudades.find(city => city.name === 'Oviedo');
        this.weather = oviedoWeather;
        this.setWeatherImage(oviedoWeather.stateSky.description);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    setWeatherImage(description) {
      switch (description.toLowerCase()) {
        case 'despejado':
          this.weatherImage = 'https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_1280.png';
          break;
        case 'poco nuboso':
          this.weatherImage = 'https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_1280.png';
          break;
        case 'nubes altas':
          this.weatherImage = 'https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37010_1280.png';
          break;
        case 'intervalos nubosos con lluvia escasa':
          this.weatherImage = 'https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_1280.png';
          break;
        case 'muy nuboso con lluvia':
        case 'cubierto con lluvia':
          this.weatherImage = 'https://cdn.pixabay.com/photo/2013/07/13/12/12/cloud-159389_1280.png';
          break;
        default:
          this.weatherImage = 'https://cdn.pixabay.com/photo/2017/09/26/18/10/weather-2789613_960_720.png'; 
      }
    },
  },
};

</script>

<style>
img{
  width:300px;
}

p{
  font-size: 30px;
}
</style>