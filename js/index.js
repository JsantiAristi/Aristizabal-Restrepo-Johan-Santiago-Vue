const { createApp } = Vue

const app = createApp({
    data(){
        return {
    // Inicializamos las variables
        datos:[]
        }
    },
    created(){
        fetch( 'https://mindhub-xj03.onrender.com/api/amazing' )
        .then( response => response.json() )
        .then( ( { data } ) => { 
            // const listaCategorias = Array.from( new Set( data.events.map( event => event.category )))
            // console.log(listaCategorias);
            console.log(this.data);
        }
        )
        .catch( err => console.log( err ) )
    },
})
    
app.mount("#app")