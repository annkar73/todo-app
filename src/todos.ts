import { ref, watch } from 'vue';
import { Todo } from './models/Todo';

export const todos = ref<Todo[]>([]);


const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
}


watch(todos, (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });

