import React from "react";
import "./estilos.css";

class Peliculas extends React.Component{
    render(){
        return(

            <main> 
            <section>
            <div class="peliculas-populares">
               <div class="contenedor">
               <h3 class="titulo">{this.props.titulo}</h3>
               <p class="descripcion">{this.props.descripcion}</p>
               
               <a href="https://www.youtube.com/watch?v=Wh1fEipFcCM" class="boton" target="_blank">Trailer</a>
               <button role="button" class="boton">Ver Horarios</button>
          
                
      
               </div> 
                
            </div>
           </section>

           
      
             
             </main>
        )
    }
}

export default Peliculas;