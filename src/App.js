import { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

class App extends Component {

  state = {
    termino :'',
    imagenes : [],
    pagina : ''
  }
scroll = () => {
   const elemento = document.querySelector('.jumbotron');
   elemento.scrollIntoView('smooth', 'end');
}


  paginaAnterior = ()=> {
    
 //leer el state de la pagina de control
 let pagina = this.state.pagina;
 // leer  es la pagina es 1 ya  no ir  hacia atras 
 if ( pagina === 1) return null;
 // sumar uno a la pagina actual
   pagina -= 1;
 // agregar el ambio al sate 
this.setState ({
 pagina
}, () => {
  this.consultarApi();
  this.scroll();
  }
);

 //console.log(pagina);

  }

  paginaSiguiente = ()=> {
    //leer el state de la pagina de control
     let pagina = this.state.pagina;
    // sumar uno a la pagina actual
      pagina += 1;
    // agregar el ambio al sate 
   this.setState ({
    pagina
   }, () => {
     this.consultarApi();
     this.scroll();
   });

   // console.log(pagina);

  }
   consultarApi = ( ) => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url=`https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;

 console.log(url);

 fetch(url)
 .then(respuest =>respuest.json() )
 .then(resultado => this.setState({imagenes : resultado.hits}))
    

  }
  
  datosBusqueda = (termino) =>{
    this.setState ({
      termino : termino ,
      pagina : 1
    },() => {
     this.consultarApi();
    })
  }

  render(){
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Buscador
        datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className= "row justify-content-center">
      <Resultado
      imagenes = {this.state.imagenes} 
      paginaAnterior= {this.paginaAnterior }
      paginaSiguiente= {this.paginaSiguiente}

      />
   </div>
    </div>
  );
 }
}

export default App;
