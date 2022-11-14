import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar ">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="fusion-logo-link" href="https://finanzvergleich.com/">
          <img
            src="https://finanzvergleich.com/wp-content/uploads//2020/10/Finanzvergleich-Standard-Logo.svg"
            srcset="https://finanzvergleich.com/wp-content/uploads//2020/10/Finanzvergleich-Standard-Logo.svg 1x"
            width="100"
            height="100"
            alt="Finanzvergleich Logo"
            data-retina_logo_url=""
            className="fusion-standard-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-center justify-content-lg-end"
          id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Kredit
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <span>Kreditvergleich</span>Kreditvergleich
                </a>
                <a className="dropdown-item" href="#">
                  <span>Baufinanzierungs&shy;vergleich</span>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                KreditKarte
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <span>Kreditkarten Vergleich</span>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Girokonto
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <span>Girokonto Vergleich</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span>Geschäftskonto Vergleich</span>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Depot
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <span>Depot Vergleich</span>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Banken
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  <span>Barclays</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span>Comdirect</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <span>Consorsbank</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span>DKB</span>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Ratgeber
              </a>
            </li>
            <li className="">
            <i class="fa fa-search px-2 pt-3" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </nav>
      <div className="avada-page-titlebar-wrapper" >
        <div className="fusion-page-title-bar fusion-page-title-bar-none fusion-page-title-bar-right"></div>
        <div className="fusion-page-title-row">
          <div className="fusion-page-title-wrapper">
            <div className="fusion-page-title-captions"></div>
            <div className="fusion-page-title-secondary"> 
              <div className="fusion-breadcrumbs">
                <span className="fusion-breadcrumb-item">
                  <a
                    href="https://finanzvergleich.com"
                    className="fusion-breadcrumb-link">
                    <span>Startseite</span>
                  </a>
                </span>
                <span className="fusion-breadcrumb-sep">/</span>
                <span className="fusion-breadcrumb-item">
                  <a
                    href="https://finanzvergleich.com/kostenloses-girokonto/"
                    className="fusion-breadcrumb-link">
                    <span>Girokonto</span>
                  </a>
                </span>
                <span className="fusion-breadcrumb-sep">/</span>
                <span className="fusion-breadcrumb-item">
                  <span className="breadcrumb-leaf">Girokonto Vergleich</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <section className="intro_vgl">
        <div className="intro_vgl_layer layer">
          <h1
            data-fontsize="34"
            data-lineheight="47.6px"
            className="fusion-responsive-typography-calculated"
            style={{ fontSize: 34, lineHeight: 1.4 }}>
            Kostenlose Girokonten im Vergleich 2022
          </h1>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
