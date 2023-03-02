import { Todo } from '../classes';
import { todoList } from '../index'


// Referencias en el HTML 
const divTodoList  = document.querySelector('.todo-list');
const txtInput     = document.querySelector('.new-todo');
const btnBorrar    = document.querySelector('.clear-completed');
const ulFiltros    = document.querySelector('.filters');
const anchorFiltros= document.querySelectorAll('.filtro');



export const crearTodoHtml = ( todo ) => {
 //String insertado dentro del div.
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ ( todo.completado ) ? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;  

    //Retorna el primer hijo del elemento
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}



// Eventos
txtInput.addEventListener('keyup', ( event ) => {

    if(  event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoTodo= new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value= '';
    }

});

divTodoList.addEventListener ('click', ( event ) => {

    const nombreElemento = event.target.localName; // input, label o button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute( 'data-id' );

    if ( nombreElemento.includes('input') ){
        todoList.marcarCompletado( todoId );

        // classList: hace referencia a todas las clases.
        // toggle: agrega o cambia una clase.
        todoElemento.classList.toggle('completed');
    } else if ( nombreElemento.includes('button') ) {

        todoList.eliminarTodo( todoId );

        // Método que elimina los hijos de nuestro elemento.
        divTodoList.removeChild ( todoElemento );

    }

})


// Evento similar a destroy de divTodoElementos
btnBorrar.addEventListener ('click', () => {

    todoList.eliminarCompletados( );

    // Recorre el arreglor de forma inversa
    for ( let i= divTodoList.children.length - 1; i >=0; i--){

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed') ){
            divTodoList.removeChild( elemento );
        }

    }

});


ulFiltros.addEventListener ('click', (event) => {

    const filtro = event.target.text;

    // Si es una sola línea se puede escribir de esta manera
    if ( !filtro ) { return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');


    for ( const elemento of divTodoList.children ){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break
        }
    }



});