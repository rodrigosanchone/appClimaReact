import React, { useContext, Component } from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useNavigate, Link } from "react-router-dom";

/* import { redirect } from 'react-router-dom';
import { LocationContext } from '../App'; */
const Header = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [citys, setCitys] = useState([]);
  //  const [state, setState] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      alert("Inserte una ciudad");
    } else {
      // alert('hola')

      const { location } = e.target.elements;
      if (location) {
        navigate(`/card/${location.value}`);
      }

      setLocation(" ");
    }
  };

  useEffect(() => {
    const getData = (): string => {
      return localStorage.getItem("citys") || "[]";
    };
    let storage = JSON.parse(localStorage.getItem("citys") || "[]");
    setCitys(storage);
  }, [citys]);

  return (
    <div className="row justify-content-evenly bg-primary">
      <div className="col-4">
        <h1>Tu clima</h1>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Ciudades
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div>
            <form className="d-flex " role="search" onSubmit={handleSubmit}>
              <input
                name="location"
                className="form-control me-2"
                type="search"
                placeholder="Ingrese ciudad"
                aria-label="Search"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              />

              <input
                className="btn btn-danger  text-white"
                type="submit"
                value="Buscar"
              />
            </form>

            {citys.length !== 0 ? (
              <ul className="list-group my-2">
                {citys.map((city) => (
                  <li key={city} className="list-group-item"  data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link
                      to={`./Card/${city}`}
                      type="button"
                      className="btn"
                     
                    >
                        {city}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <>No hay ciudades aún</>
            )}
          </div>
        </div>
      </div>
      <div className="col-2">
        <a
          className="navbar-toggler-icon"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
