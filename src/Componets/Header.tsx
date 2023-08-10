
import React, { useContext, Component } from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import { useNavigate, Link } from 'react-router-dom';

/* import { redirect } from 'react-router-dom';
import { LocationContext } from '../App'; */
const Header = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [citys, setCitys] = useState([])
    const [state, setState] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
       if(!location){
        alert('Inserte una ciudad')
       }else{
         // alert('hola')
       
         const { location } = e.target.elements
         if (location) {
           
             navigate(`/card/${location.value}`)
            
         }
           
         setLocation(' ')
       
         
       }
    

    }  

    const getData = (): string => {
        return localStorage.getItem('citys') || "[]";
    }


    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('citys')||'[]');
        setCitys(storage);
    }, []);

    const handleClick = () => {
        setState(!state);
        setTimeout(handleClick, 
            300); // Llama a la función cada segundo
      }

      

    return (

        <nav className="navbar navbar-expand-lg justify-content-evenly bg-primary">

            <div className="container-fluid">
                < Link to="/" className="navbar-brand  text-white">Tu clima</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">

                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle  text-white" href="#" role="button" data-bs-toggle="dropdown" >
                                Ciudades

                            </a>
                          
                              {
                                 citys.length!==0?
                                 (  <ul className="dropdown-menu">
                                    { citys.map((city) => (
                                        <li>
                                            <Link to={`./Card/${city}`} className="dropdown-item">{city}</Link>
                                        </li>
                                    ))}
                                    </ul>
                                 ):
                                 (<></>)
                              }
                            

                        </li>



                    </ul>


                    <form className="d-flex " role="search" onSubmit={handleSubmit}>
                        <input name='location' className="form-control me-2" type="search" placeholder="Ingrese ciudad" aria-label="Search" onChange={(e) => { setLocation(e.target.value) }} value={location}/>

                        <input className="btn btn-danger  text-white" type="submit" value="Buscar" />


                    </form>


                </div>
            </div>
        </nav>

    )
}

export default Header