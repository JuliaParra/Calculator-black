<template>
    <div>
      <h1>Conversor de Divisas</h1>
      <div class="contenedor">
        <label for="amount">Cantidad:</label>
        <input type="number" v-model="amount" id="amount" />
      
      <div>
        <label for="from">De:</label>
        <select v-model="Currency" id="from">
          <option v-for="(rate, currency) in rates" :key="currency" :value="currency">{{ currency }}</option>
        </select>
      </div>
      <div>
        <label for="to">A:</label>
        <select v-model="toCurrency" id="to">
          <option v-for="(rate, currency) in rates" :key="currency" :value="currency">{{ currency }}</option>
        </select>
      </div>
      <button @click="convertCurrency">Convertir</button>
      <div v-if="result !== null">
        <h3>Resultado: {{ result }} {{ toCurrency }}</h3>
      </div>
    </div>
    </div>
  </template>
    
    <script setup>
    import { ref } from 'vue';
  
  const amount = ref(0);
  const fromCurrency = ref('EUR');
  const toCurrency = ref('USD');
  const rates = {
    "EUR": 1.0,
    "USD": 1.18,
    "JPY": 132.67,
    "HNL": 29.17
  };
  const result = ref(null);

  const convertCurrency = () => {
  if (amount.value !== 0) {
    const fromRate = rates[fromCurrency.value];
    const toRate = rates[toCurrency.value];
    result.value = (amount.value * toRate / fromRate).toFixed(2);
  } else {
    result.value = null;
  }
};
   
  </script>

  <style lang="scss">

  h1{
    color: azure;

  }

  .contenedor {
  width: 40%;
  height: 300px;
  margin: 0 auto;
  padding: 1%;
  background-color: #f8f9fa;
  border-radius: 5%;

  }

  #amount{

    display: block;
    margin: 1%;
    color: rgb(11, 11, 11);
  }

  #from{

    display: block;
    margin: 1%;
    color: rgb(14, 14, 14);
  }

  #to{

    display: block;
    margin: 1%;
    color: rgb(7, 7, 7);


  }

 

  


</style>
   
    
  