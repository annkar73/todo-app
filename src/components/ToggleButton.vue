<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
import colorIcon from '../assets/rainbow-clr.svg';
import bwIcon from '../assets/rainbow-bw.svg';

const emit = defineEmits(['loadColorTodo', 'loadBwTodo']);

const isColorTodo = ref(true);

const loadColorTodo = () => {
  if (!isColorTodo.value) {
    isColorTodo.value = true;
    emit('loadColorTodo');
  }
};

const loadBwTodo = () => {
  if (isColorTodo.value) {
    isColorTodo.value = false;
    emit('loadBwTodo');
  }
};

const buttonText = ref('Byt till Monochrome');

// Uppdatera knapptext när isColorTodo ändras
watch(isColorTodo, (newValue) => {
  buttonText.value = newValue ? 'Byt till Monochrome' : 'Byt till Unicorn Barbie';
});
</script>

<template>
    <div class="toggle-buttons">
      <button @click="loadColorTodo" :class="{ active: isColorTodo }">
        <img :src="colorIcon" alt="Color Icon" />
      </button>
      <button @click="loadBwTodo" :class="{ active: !isColorTodo }">
        <img :src="bwIcon" alt="Black and White Icon" />
      </button>
      <div class="button-text">{{ buttonText }}</div>
    </div>
</template>

  <style scoped>
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  div .button-text {
    font-style: italic;
    font-size: small;
  }

  img {
    height: 55px;
    width: 55px;
  }
  </style>