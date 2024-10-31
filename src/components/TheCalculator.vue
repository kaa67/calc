<script setup lang="ts">
import { parseExec } from '@/utils/parseExec'
import { ref } from 'vue'

const calcString = ref('')

const addDigit = (event: Event) => {
  const el = event.target as HTMLButtonElement
  calcString.value += el.innerText
}

const addOperation = (event: Event) => {
  const el = event.target as HTMLButtonElement
  calcString.value += el.innerText
}

const clearAll = () => {
  calcString.value = ''
}

const removeChar = () => {
  if (calcString.value) {
    calcString.value = calcString.value.slice(0, -1)
  }
}

const pareseExecutor = () => {
  calcString.value = parseExec(calcString.value)
}
</script>

<template>
  <div class="row">
    <div class="col">
      <input class="form-control form-control-lg" v-model="calcString" />
    </div>
  </div>

  <br />

  <div class="row">
    <div class="col">
      <button class="btn btn-lg btn-secondary" @click="addDigit">7</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">8</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">9</button>
      <button class="btn btn-lg btn-info" @click="addOperation">+</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button class="btn btn-lg btn-secondary" @click="addDigit">4</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">5</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">6</button>
      <button class="btn btn-lg btn-info" @click="addOperation">-</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button class="btn btn-lg btn-secondary" @click="addDigit">1</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">2</button>
      <button class="btn btn-lg btn-secondary" @click="addDigit">3</button>
      <button class="btn btn-lg btn-info" @click="addOperation">*</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button class="btn btn-lg btn-secondary double" @click="addDigit">
        0
      </button>
      <button class="btn btn-lg btn-secondary">.</button>
      <button class="btn btn-lg btn-info" @click="addOperation">/</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button class="btn btn-lg btn-danger" @click="clearAll">C</button>
      <button class="btn btn-lg btn-danger" @click="removeChar">&larr;</button>
      <button class="btn btn-lg btn-success double" @click="pareseExecutor">
        =
      </button>
    </div>
  </div>
</template>

<style>
button {
  width: 5rem;
  margin: 2px;
}

.double {
  min-width: 10rem;
  margin: 2px 4px;
}
</style>
