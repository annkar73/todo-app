<script setup lang="ts">
import { Todo } from '../models/Todo';
import { todos } from '../todos';
import { ref } from 'vue';

const todoText = ref("");


const getColorClass = (index: number) => {
    const colors = ['pink', 'turquoise', 'green', 'blue', 'yellow', 'purple'];
    return colors[index % colors.length];
};


const handleInput = (e: any) => {
    todoText.value = e.target.value;
};

const addTodo = () => {
    if (todoText.value.trim() !== '') {
        todos.value.push(new Todo(todoText.value));
    todoText.value = '';
    }
};


const toggleTodo = (i: number) => {
    todos.value[i].done = !todos.value[i].done;
}

const removeTodo = (i: number) => {
    todos.value.splice(i, 1);
}



</script>


<template>
    <div class="container">
    <h2>Att göra</h2>

    <div class="input-container">
        <input type="text" v-model="todoText" @input="handleInput" class="todo-input"  placeholder="Skriv din todo här!" />
        <button @click="addTodo" class="save-button">Spara</button>
    </div>

    <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="todo.id" :class="'todo-item ' + getColorClass(index)">
            <div class="todo-content">
            <span :class="todo.done ? 'done' : ''">{{ todo.text }}
                <span v-if="todo.done" class="done-indicator"> - Klar</span>
            </span>
            <div class="button-container">
            <button @click="() => toggleTodo(index)" class="change-button">Ändra</button>
            <button @click="() => removeTodo(index)" class="delete-button">Ta bort</button>
        </div>

            </div>

        </li>
    </ul>
</div>

</template>

<style scoped>

h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    border: 10px solid transparent;
    border-image: linear-gradient(to right, hotpink, pink, paleturquoise, lightblue, palegreen, limegreen, gold);
    border-image-slice: 1;
    color: hotpink;
    margin-bottom: 15px;
}

.container {
    background-color: whitesmoke;
    padding: 10px;
    margin: 0 auto;
    width: 380px;
}

.input-container {
    display: flex;
    margin-bottom: 10px;
}

.input-container input {
    flex: 1;
    margin-right: 10px;
}

.todo-input {
    background-color: lightcyan;
    height: 40px;
    width: auto;
    font-size: 16px;
    border: 3px solid transparent;
    border-image: linear-gradient(to right, gold, limegreen, palegreen, paleturquoise, lightblue, pink, hotpink);
    border-image-slice: 1;
}

.todo-input::placeholder {
    text-indent: 15px;
    color: black;
}

input[type="text"]:focus {
    outline: none;
    border: 1px solid;
    border-image: linear-gradient(to right, gold, limegreen, palegreen, paleturquoise, lightblue, pink, hotpink);
    border-image-slice: 1;
    box-shadow: 0 0 7px hotpink;
}

.save-button {
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 20px;
    font-weight: bold;
    transition: box-shadow 0.3s ease;
}

.save-button:hover {
    background-color: white;
    color: hotpink;
    box-shadow: 0 0 20px hotpink;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;

}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #333;
    border-radius: 5px;
}

.todo-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.button-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
    
.change-button {
    height: 40px;
    width: 55px;
    background-color: white;
    color: black;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
}

.change-button:hover {
    background-color: rgb(103, 17, 251);
    color: white;
    box-shadow: 0 0 20px rgb(103, 17, 251);
}

.delete-button {
    height: 40px;
    width: 55px;
    background-color: darkslategrey;
    color: white;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: hotpink;
    color: white;
    box-shadow: 0 0 20px hotpink;

}

.todo-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
}

.done {
    color: darkred;
    font-style: italic;
}

.done-indicator {
    font-weight: bold;
    font-size: larger;
    color: darkgreen;
    margin-left: 5px;
}

.todo-content button {
    margin-left: 10px;
}

.pink {
    background-color: rgb(255, 199, 207, 0.5);
}

.turquoise {
    background-color: rgb(175, 238, 238, 0.5);
}

.green {
    background-color: rgb(179, 250, 179, 0.5);
}

.blue {
    background-color: rgb(173, 216, 230, 0.5);
}

.yellow {
    background-color: rgb(255, 215, 0, 0.5);
}

.purple {
    background-color: rgb(221, 160, 221, 0.5);
}

</style>
