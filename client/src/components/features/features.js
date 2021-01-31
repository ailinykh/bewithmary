import React from 'react';
import icoApple from './features-apple.svg';
import icoCarrot from './features-carrot.svg';
import icoFruits from './features-fruits.svg';
import icoLight from './features-light.svg';
import icoPlane from './features-plane.svg';


export default () =>
<section className="section features">
  <div className="container">
    <h2 className="title">Преимущества</h2>
    <div className="features-container columns has-text-centered">
      <div className="feature column is-vertical">
        <img alt="fruits" src={icoFruits}/>
        <p>Мой подход позволяет вкусно есть и оставаться стройным</p>
      </div>
      <div className="feature column is-vertical">
        <img alt="plane" src={icoPlane}/>
        <p>Вас ждёт познавательное путешествие к лучшей версии себя</p>
      </div>
      <div className="feature column is-vertical">
        <img alt="light" src={icoLight}/>
        <p>Я научу вас слышать потребности своего тела и правильно реагировать на них</p>
      </div>
      <div className="feature column is-vertical">
        <img alt="vegetables" src={icoCarrot}/>
        <p>Я научу вас слышать потребности своего тела и правильно реагировать на них</p>
      </div>
      <div className="feature column is-vertical">
        <img alt="berries" src={icoApple}/>
        <p>Я научу вас слышать потребности своего тела и правильно реагировать на них</p>
      </div>
    </div>
  </div>
</section>
