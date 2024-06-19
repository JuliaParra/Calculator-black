<template>
    <div>
      <h1>Conversor de Divisas</h1>
      <div>
        <label for="amount">Cantidad:</label>
        <input type="number" v-model="amount" id="amount" />
      </div>
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
        <h3>Resultado: {{ result }}</h3>
      </div>
    </div>
  
  </template>
    
    <script setup>
    import { ref } from 'vue';
  
  const amount = ref(0);
  const fromCurrencys = ref('EUR');
  const toCurrency = ref('USD');
  const rates = {
    "EUR": 1.0,
    "USD": 1.18,
    "JPY": 132.67,
    "HNL": 29.17
  };
  const result = ref(null);
  
  
  
  
  
  
  
  
  </script>
   
    
  