import './css/styles.css';
//Obs1: Siempre busca un archivo tipo js
//Obs2: Busca el index.js por defecto
import { Todo, TodoList }  from './classes';
import { crearTodoHtml } from './js/componentes';

/*import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';*/


export const todoList = new TodoList();

// Solo si hay 1 solo argumento
todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo('Aprender JavaScript');
//todoList.nuevoTodo( newTodo );
//todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

console.log('todos', todoList.todos );

//Recordar que son instancias y tratarlas como una.
//todoList.nuevoTodo ( tarea );





//console.log( todoList );

//crearTodoHtml( tarea );



// Local storage y Session storage
//Obs1: El session storage sí se borra cuando se cierra por completo el navegador web
//Obs2: Los datos guardados en el local storage son visibles para el usuario.

//localStorage.setItem('mi-llave', 'ABC123');
//sessionStorage.setItem('mi-llave', 'ABC123');

/*setTimeout( () => {

    localStorage.removeItem('mi-llave');

}, 1500 );*/

