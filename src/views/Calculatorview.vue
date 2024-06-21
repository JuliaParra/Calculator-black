<template>
  <main>
    <div class="col-md-4 m-3">
      <table class="table table-bordered">
        <tbody>
          <tr class="output">
            <td colspan="4">
              {{ result || 0 }}
            </td>
          </tr>
          <tr>
            <td @click="clear">CE</td>
            <td class="operadores" @click="setOperator('/')"><i class="fas fa-divide">%</i></td>
          </tr>
          <tr>
            <td @click="addNumber('7')">7</td>
            <td @click="addNumber('8')">8</td>
            <td @click="addNumber('9')">9</td>
            <td class="operadores" @click="setOperator('*')"><i class="fa-solid fa-xmark">*</i></td>
          </tr>
          <tr>
            <td @click="addNumber('4')">4</td>
            <td @click="addNumber('5')">5</td>
            <td @click="addNumber('6')">6</td>
            <td class="operadores" @click="setOperator('-')"><i class="fa-solid fa-minus">-</i></td>
          </tr>
          <tr>
            <td @click="addNumber('1')">1</td>
            <td @click="addNumber('2')">2</td>
            <td @click="addNumber('3')">3</td>
            <td class="operadores" @click="setOperator('+')"><i class="fa-solid fa-plus">+</i></td>
          </tr>
          <tr>
            <td colspan="2" @click="addNumber('0')">0</td>
            <td @click="addPoint">.</td>
            <td class="operadores" @click="equal"><i class="fa-solid fa-equals"></i>=</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      result: '0',
      tmp_value: '',
      reset: false,
      operator: undefined
    };
  },
  methods: {
    clear() {
      this.result = '0';
      this.tmp_value = 0;
      this.operator = undefined;
    },
    invert() {
      this.result = (parseFloat(this.result) * -1).toString();
    },
    percent() {
      this.result = (parseFloat(this.result) / 100).toString();
    },
    addNumber(number) {
      if (this.result === '0' || this.reset) {
        this.result = '';
        this.reset = false;
      }
      this.result += number.toString();
    },
    addPoint() {
      if (!this.result.includes('.')) this.result += '.';
    },
    setOperator(operator) {
      if (this.tmp_value !== '') this.calculate();
      this.tmp_value = parseFloat(this.result);
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
      const firstNum = parseFloat(this.tmp_value);
      const secondNum = parseFloat(this.result);

      switch (this.operator) {
        case '+':
          value = firstNum + secondNum;
          break;
        case '-':
          value = firstNum - secondNum;
          break;
        case '*':
          value = firstNum * secondNum;
          break;
        case '%':
          value = firstNum / secondNum;
          break;
      }

      this.result = value.toString();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
