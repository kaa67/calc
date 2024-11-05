<script setup lang="ts">
import { parseExec } from '@/utils/parseExec'
import { reactive, ref } from 'vue'

const calcString = ref('')
const isLg = ref(true)
const isSm = ref(false)
const isXs = ref(false)

const onResize = () => {
  const width = window.innerWidth
  isXs.value = false
  isSm.value = false
  isLg.value = false

  if (width >= 1024) {
    isLg.value = true
  } else if (width >= 576) {
    isSm.value = true
  } else {
    isXs.value = true
  }
}

const digClass = reactive([
  'btn',
  'btn-secondary',
  {
    'btn-xs': isXs,
    'btn-sm': isSm,
    'btn-lg': isLg,
  },
])

const zeroClass = reactive([
  'btn',
  'btn-secondary',
  'double',
  {
    'btn-xs': isXs,
    'btn-sm': isSm,
    'btn-lg': isLg,
  },
])

const parseClass = reactive([
  'btn',
  'btn-success',
  'double',
  {
    'btn-xs': isXs,
    'btn-sm': isSm,
    'btn-lg': isLg,
  },
])

const opsClass = reactive([
  'btn',
  'btn-info',
  {
    'btn-xs': isXs,
    'btn-sm': isSm,
    'btn-lg': isLg,
  },
])

const delClass = reactive([
  'btn',
  'btn-danger',
  {
    'btn-xs': isXs,
    'btn-sm': isSm,
    'btn-lg': isLg,
  },
])

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

window.addEventListener('resize', onResize)
</script>

<template>
  <div class="row">
    <div class="col">
      <form action="/" @submit.prevent="pareseExecutor">
        <input
          id="forParse"
          v-model="calcString"
          class="form-control form-control-lg"
        />
      </form>
    </div>
  </div>

  <br />

  <div class="row">
    <div class="col">
      <button :class="digClass" @click="addDigit">7</button>
      <button :class="digClass" @click="addDigit">8</button>
      <button :class="digClass" @click="addDigit">9</button>
      <button :class="opsClass" @click="addOperation">+</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button :class="digClass" @click="addDigit">4</button>
      <button :class="digClass" @click="addDigit">5</button>
      <button :class="digClass" @click="addDigit">6</button>
      <button :class="opsClass" @click="addOperation">-</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button :class="digClass" @click="addDigit">1</button>
      <button :class="digClass" @click="addDigit">2</button>
      <button :class="digClass" @click="addDigit">3</button>
      <button :class="opsClass" @click="addOperation">*</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button :class="zeroClass" @click="addDigit">0</button>
      <button :class="digClass" @click="addDigit">.</button>
      <button :class="opsClass" @click="addOperation">/</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button :class="delClass" @click="clearAll">C</button>
      <button :class="delClass" @click="removeChar">&larr;</button>
      <button :class="parseClass" @click="pareseExecutor">=</button>
    </div>
  </div>
</template>

<style>
button {
  width: 100px;
  margin: 2px;
}

.double {
  width: 204px;
}

@media (max-width: 576px) {
  button {
    width: 50px;
    margin: 1px;
  }

  .double {
    width: 102px;
  }
}
</style>
