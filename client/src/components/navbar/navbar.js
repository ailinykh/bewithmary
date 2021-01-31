import React from 'react';
import logo from './logo132.png'

export default () =>
  <div className="container">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Logo" />
        </a>

        <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-menu">
          {/* <a href="#about" className="navbar-item">Обо мне</a>
          <a href="#projects" className="navbar-item">Проекты</a>
          <a href="#content" className="navbar-item">Материалы (бонус)*</a>
          <a href="#reviews" className="navbar-item">Отзывы</a>
          <a href="#education" className="navbar-item">Сертификаты</a> */}
          <a href="#plans" className="navbar-item">Тарифы</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-rounded">
                  <span className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </button>
              </p>
              <p className="control">
                <button className="button is-rounded">
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                </button>
              </p>
              <p className="control">
                <button className="button is-rounded">
                  <span className="icon">
                    <i className="fab fa-vk"></i>
                  </span>
                </button>
              </p>
              <p className="control">
                <button className="button is-rounded">
                  <span className="icon">
                    <i className="fab fa-telegram-plane"></i>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
