import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import CartWidget from "./CartWidget";

function Navbar() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((data) => {
        setTypes(data.results);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {types.map((type) => (
          <li className="nav-item" key={type.name}> <a className="nav-link" href="/">{type.name}</a>  </li>
        ))}
        <li className="nav-item"> <a className="nav-link" href="/"> <CartWidget/></a>  </li>
      </ul>
    </nav>
  );
}

export default Navbar;
