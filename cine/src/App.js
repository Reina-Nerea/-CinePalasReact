 
 
 import Header from "./Header";
 import Peliculas from './Peliculas';
  import peliculas from "./peliculas.json";
 

function App() {
  return (
  
     <> <Header  />
     {peliculas.map( peli=> <Peliculas
     titulo={peli.titulo}
     descripcion={peli.descripcion}
     img={peli.img}
     />)}  </>
     

  );
}

export default App;
