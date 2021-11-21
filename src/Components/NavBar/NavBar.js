import React from 'react';
import './styles.css';
import './bootstrap.css';

const NavBar = () => {
    return (
        <header class= "header">

        <nav class="navbar d-flex justify-content-center navbar-expand-lg navbar-dark">
          <a class="navbar-brand Home" href="#">
              {/* <img src="../img/logo.png" width="45" height="45" class="d-inline-block align-top " alt=""> */}
              Mangakyou
            </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse text-center navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link Mangas" href="#">Mangas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link Figuras" href="#">Figuras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link Contacto" href="#">Contacto</a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
              <i class="fas fa-search icon-search"></i>
              <input class="form-control mr-sm-2 search searchStyle" type="search" id= "search" placeholder="Buscar..." aria-label="Search">
            </form>
            <button type="button" id= "boton-bootstrap" class="btn" data-toggle="modal" data-target="#exampleModal">
                <i class="fas fa-shopping-bag shop"></i>
            </button> */}
          </div>
        </nav>
    </header>
    )
}

export default NavBar
