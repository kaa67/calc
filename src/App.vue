<script setup lang="ts">
import Calculator from './components/TheCalculator.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <header>
          <p>
            Stack: vue 3, Bootstrap 5,&nbsp;
            <a href="https://github.com/kaa67/calc">Rep</a>
          </p>
          <h1>Калькулятор</h1>
        </header>

        <main>
          <Calculator />
        </main>
      </div>
    </div>
  </div>
</template>
