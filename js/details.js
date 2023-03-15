const { createApp } = Vue

const app = createApp({
    data(){
        return {
    // Inicializamos las variables
        eventos: [],
        valorBusqueda: "",
        eventosFiltrados: [],
        params: "",
        id: "",
        change:"",
        }
    },
    created(){
        fetch( 'https://mindhub-xj03.onrender.com/api/amazing' )
        .then( response => response.json() )
        .then( data => { 
            this.eventos = data.events;
            //cambio en la URL
            this.params = new URLSearchParams(location.search);
            this.id = this.params.get("id");
            // objeto que tiene el Id
            this.eventosFiltrados = data.events.find(elemento => elemento._id == this.id);
            this.change = this.eventosFiltrados.estimate ? 'estimate' : 'assistance';
        })
        .catch( err => console.log( err ) )
    },
})
    
app.mount("#app")