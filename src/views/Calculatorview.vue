<script setup>

</script>

<template>
  <main>
    
    <div class="col-md-4 m-3">
      <table class="table table-bordered">
        <tbody>
          <tr class="output">
            <td colspan="4">
              {{ output || 0 }}
            </td>
          </tr>
          <tr>
            <td v-on:click="clearField">CE</td>
            <td class="operadores" @click="processOutput('div')"><i class="fas fa-divide"></i></td>
          </tr>
          <tr>
            <td v-on:click="getNumber('7')">7</td>
            <td v-on:click="getNumber('8')">8</td>
            <td v-on:click="getNumber('9')">9</td>
            <td class="operadores" @click="processOutput('multi')"><i class="fa-solid fa-xmark"></i></td>
          </tr>
          <tr>
            <td v-on:click="getNumber('4')">4</td>
            <td v-on:click="getNumber('5')">5</td>
            <td v-on:click="getNumber('6')">6</td>
            <td class="operadores" @click="processOutput('sub')"><i class="fa-solid fa-minus"></i></td>
          </tr>
          <tr>
            <td v-on:click="getNumber('1')">1</td>
            <td v-on:click="getNumber('2')">2</td>
            <td v-on:click="getNumber('3')">3</td>
            <td class="operadores" @click="processOutput('add')"><i class="fa-solid fa-plus"></i></td>
          </tr>
          <tr>
            <td colspan="2" v-on:click="getNumber('0')">0</td>
            <td v-on:click="getDot()">.</td>
            <td class="operadores" @click="updateOutput"><i class="fa-solid fa-equals"></i></td>
          </tr>
        </tbody>
      </table>
    </div>


  
    
  </main>
</template>
