
  
  <script>
  export default {
    name: 'Weather',
    data() {
      return {
        city: 'Principado de Asturias',
        weather: null
      };
    },
    mounted() {
      this.getWeather();
    },
    methods: {
      async getWeather() {
        try {
          const response = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/33`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.weather = {
            provincia: data.nombre,
            temperatura_actual: data.temperatura_actual,
            descripcion: data.descripcion
          };
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  