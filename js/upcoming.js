const { createApp } = Vue

const app = createApp({
    data(){
        return {
    // Inicializamos las variables
        eventos: [],
        listaCategorias: [],
        valorBusqueda: "",
        checked: [],
        eventosFiltrados: undefined
        }
    },
    created(){
        fetch( 'https://mindhub-xj03.onrender.com/api/amazing' )
        .then( response => response.json() )
        .then( data => { 
            this.listaCategorias = Array.from( new Set( data.events.map( event => event.category )));
            this.eventos = data.events.filter(event => event.date >= data.currentDate);
            this.eventosFiltrados = data.events.filter(event => event.date >= data.currentDate);
        })
        .catch( err => console.log( err ) )
    },
    methods : {
        filtrocruzado(){
            this.eventosFiltrados = this.eventos.filter( event => {
                return (event.name.toLowerCase().includes( this.valorBusqueda.toLowerCase())
                && ((this.checked.includes( event.category )) || this.checked.length === 0))
            })
        },
    }
})
    
app.mount("#app")

//boton
const btnScrollTop = document.querySelector('#btn-scroll-top');

btnScrollTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
});