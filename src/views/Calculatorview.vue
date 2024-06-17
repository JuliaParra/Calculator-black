<script>
  export default {
    data: function() {
      return {
        result: 0,
        tmp_value: 0,
        reset: false,
        operator: undefined
      }
    },
    methods: {
      clear() {
        this.result = 0;
        this.tmp_value = 0;
        this.operator = undefined;
      },
      invert() {
        this.result *= -1;
      },
      percent() {
        this.result /= 100;
      },
      addNumber(number) {
        if(this.result == 0 || this.reset === true) {
          this.result = '';
          this.reset = false;
        }

        this.result += number.toString();
      },
      addPoint() {
        if(!this.result.includes('.'))
          this.result += '.';
      },
      setOperator(operator) {
        if(this.tmp_value != 0)
          this.calculate();

        this.tmp_value = this.result;
        this.operator = operator;
        this.reset = true;
      },
      equal() {
        this.calculate();
        this.tmp_value = 0;
        this.operator = undefined;
      },
      calculate() {
        let value = 0;
        let firstNum = parseFloat(this.tmp_value);
        let secondNum = parseFloat(this.result);

        switch(this.operator) {
          case '+':
            value = firstNum + secondNum;
            break;
          case '-':
            value = firstNum - secondNum;
            break;
          case '*':
            value = firstNum * secondNum;
            break;
          case '/':
            value = firstNum / secondNum;
        }

        this.result = value.toString();
      }
    }
  }
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

<style lang="scss" scoped>
  .calculator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 3rem;

    table {
      color: #fff;
      width: 370px;
    }

    input {
      display: block;
      width: calc(100% - 40px);
      height: 75px;
      padding: 5px 20px 0;
      margin-bottom: 10px;
      border: none;
      background-color: #222;
      color: #fff;
      font-size: 4rem;
      text-align: right;
    }

    .button {
      margin: 10px;
      border-radius: 40px;
      width: 80px;
      height: 80px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
    }

    .button-col2 {
      border-radius: 40px;
      width: 160px;
      height: 80px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
    }

    .grey {
      background-color: #ccc;
      color: #333;

      &:hover {
        background-color: #ddd;
      }
    }

    .dark {
      background-color: #444;
      color: #fff;

      &:hover {
        background-color: #555;
      }
    }

    .orange {
      background-color: #e08d1f;
      color: #fff;

      &:hover {
        background-color: #fda22b;
      }
    }
  }
</style>