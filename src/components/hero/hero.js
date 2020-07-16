import React from 'react';
import Mary from './mary.png';

export default () =>
  <section className="hero">
    <div className="container">
      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column is-two-thirds">
            <h2 className="title">Привет, я Мария, практикующий нутрициолог</h2>
            <p className="subtitle">Ваше здоровье для меня в приоритете. Поэтому вы не найдете  волшебных таблеток и краткосрочных диет.</p>
            {/* <p className="subtitle">В своей практике я руководствуюсь принципами рационального сбалансированного питания. Со мной вы не будете считать калории, а научитесь питаться осознанно</p> */}
            <button className="button is-medium is-primary">Записаться на консультацию</button>
            &nbsp;
            &nbsp;
            <button className="button is-medium">Заказать звонок</button>
          </div>
          <div className="column"><img alt="Мария Ильиных" src={Mary}/></div>
        </div>
      </div>
    </div>
  </section>

