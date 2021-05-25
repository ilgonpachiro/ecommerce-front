import React from 'react';
import LOGO from '../images/toyworld.png'
import {Link} from 'react-router-dom';

// import React from "react";
// import "../App.css";
// import imagenjugueteria from "../images/toystoryFondo.jpg";

function Body (){
    
        return (
            <div className="container-fluid imagenFondo">
                <img src={LOGO} alt="imagenjugueteria" className="imagenFondo"></img>

               
                        
            </div>
        );
    }


export default Body;