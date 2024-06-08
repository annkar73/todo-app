<script setup lang="ts">
import { ref } from 'vue';
import ToggleButton from '../src/components/ToggleButton.vue';

import TodoList from '../src/components/TodoList.vue';
import TodoBw from './components/TodoBw.vue';

const isColorTodo = ref(true);

const loadColorTodo = () => {
    isColorTodo.value = true;
};
const loadBwTodo = () => {
    isColorTodo.value = false;
};

</script>

<template>
<div id="app">
    <ToggleButton @loadColorTodo="loadColorTodo" @loadBwTodo="loadBwTodo" />
    <div v-if="isColorTodo">
        <TodoList />
    </div>
    <div v-else>
        <TodoBw />
    </div>
</div>
</template>

<style scoped>
</style>
