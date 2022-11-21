import React from "react";
class Header extends React.Component{
    render(){
        return(
            <header>
        <div className="contenedor">
            <h2 className="logotipo">CinePalace</h2>
            <nav>
               <a href="#" className="activo">Cartelera</a>
               <a href="#">Promociones</a>
               <a href="#">Películas</a>
               <a href="#">Horarios</a>
                
            </nav>
        </div>
       </header>
        )
    }
}

export default Header;