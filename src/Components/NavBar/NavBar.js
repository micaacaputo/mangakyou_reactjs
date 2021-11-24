import React from 'react';
import './styles.css';
import './bootstrap.css';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header className= "header">

        <nav className="navbar d-flex justify-content-center navbar-expand-lg navbar-dark">
          <a className="navbar-brand Home" href="/#">
              <img src={'./img/logo2.png'} width="45" height="45" className="d-inline-block align-top " alt=""/>
              Mangakyou
            </a>
          <div className="collapse text-center navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link Mangas" href="/#">Mangas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link Figuras" href="/#">Figuras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link Contacto" href="/#">Contacto</a>
              </li>
              </ul>
              <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <CartWidget /> 0</a>
                </li>
            </ul>
          </div>
        </nav>
    </header>
    )
}

export default NavBar
