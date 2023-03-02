import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        //this.todos= [];
        this.cargarLocalStorage();


    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){

        // .filter( ): Método que crea un nuevo array con todos los elementos que cumplen la condición
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for ( const todo of this.todos ) {

            if ( todo.id == id ){

                todo.completado= !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage(){

        //Siempre preguntar si el objeto existe

        this.todos = ( localStorage.getItem('todo') )
                         ? JSON.parse( localStorage.getItem('todo') )
                         : [];

        // Obs1: map(): Barre los elementos de un arreglo y retorna un nuevo arreglo con los objetos mutados
        this.todos = this.todos.map ( Todo.fromJson );
    }

}


