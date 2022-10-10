<template>
  <div class="calculator-container">
    <div class="screen">{{ currentValue }}</div>
    <div
      v-for="key in calculatorKeys"
      :key="key"
      @click="actionHandler(key)"
      class="key-style"
      :class="{
        zero: key === '0',
        orange: ['+', '-', 'x', '÷', '='].includes(key),
      }"
    >
      {{ key }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const calculatorKeys = [
      "C",
      "+/-",
      "%",
      "÷",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
    ];
    const currentValue = ref("0");
    const prevNumber = ref(null);
    const currentOperator = ref(null);

    const actionHandler = (key) => {
      let actionObj = {
        C: () => (currentValue.value = "0"),
        "+/-": () => {
          currentValue.value =
            currentValue.value.charAt(0) === "-"
              ? currentValue.value.slice(1)
              : `-${currentValue.value}`;
        },
        "%": () => {
          currentValue.value = +currentValue.value / 100;
        },
        ".": () => {
          if (currentValue.value.indexOf(".") === -1) {
            currentValue.value += ".";
          }
        },
        "+": () => {
          currentOperator.value = (a, b) => +a + +b;
        },
        "-": () => {
          currentOperator.value = (a, b) => +a - +b;
        },
        x: () => {
          currentOperator.value = (a, b) => +a * +b;
        },
        "÷": () => {
          currentOperator.value = (a, b) => +a / +b;
        },
        "=": () => {
          currentValue.value = `${currentOperator.value(
            prevNumber.value,
            currentValue.value
          )}`;
        },
      };
      if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(key)) {
        if (["+", "-", "x", "÷"].includes(currentValue.value?.at(-1))) {
          currentValue.value = "";
        }
        currentValue.value =
          currentValue.value === "0"
            ? `${currentValue.value.slice(1)}${key}`
            : `${currentValue.value}${key}`;
      } else {
        if (["+", "-", "x", "÷"].includes(key)) {
          operatorAction(key);
        }
        actionObj[key]();
      }
    };
    const operatorAction = (key) => {
      if (["+", "-", "x", "÷"].includes(currentValue.value?.at(-1))) {
        currentValue.value = currentValue.value.slice(0, -1) + key;
        prevNumber.value = currentValue.value.slice(0, -1);
      } else {
        prevNumber.value = currentValue.value;
        currentValue.value += key;
      }
    };

    return {
      calculatorKeys,
      currentValue,
      currentOperator,
      actionHandler,
    };
  },
});
</script>

<style scoped>
.calculator-container {
  margin: 0 auto;
  display: grid;
  font-size: 40px !important;
  width: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.key-style {
  border: 1px solid black;
  background-color: rgb(185, 179, 179);
}
.screen {
  grid-column: 1 / 5;
  border: 1px solid black;
  background-color: black;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.orange {
  background-color: orange;
}
</style>
