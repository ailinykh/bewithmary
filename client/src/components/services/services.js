import React from 'react';


const Card = ({title, content, condition}) =>
  <div className="column">
    <div className="card">
    <header className="card-header">
      <div className="card-header-title">
        {title}
      </div>
    </header>
    <div className="card-content">
      <ul>
        {content.map((text, i) => <li key={`key-${i}`}>{text}</li>)}
      </ul>
    </div>
    <footer className="card-footer">
      <div className="condition">{condition}</div>
      <button className="button is-medium is-primary">Заказать звонок</button>
    </footer>
    </div>
  </div>

const content = [
  {
    key: 0,
    title: "Online-консультация",
    content: [
      "Анализ рациона по дневнику питания",
      "Выявление ошибок и рекомендации по их устранению",
      "Подбор продуктов питания с учетом ваших предпочтений",
      "Вы получаете четкий план действий для достижения своей цели",
      "Ответы на интересующие вас вопросы"
    ],
    condition: "3900 руб"
  },
  {
    key: 1,
    title: "Личная консультация в Москве",
    content: [
      "Ежедневный/еженедельный анализ результатов",
      "Мотивационные задания при необходимости",
      "Комплексные рекомендации по изменению образа жизни",
      "Анализ рациона по дневному питанию",
      "Выявление ошибок и рекомендации по их устранению",
      "Подбор продуктов питания с учетом ваших предпочтений",
      "Вы получаете четкий план действий для достижения своей цели",
      "Ответы на интересующие вас вопросы"
    ],
    condition: "4900 руб. | 28 дней"
  },
  {
    key: 2,
    title: "Диетологическое сопровождение",
    content: [
      "Анализ рациона по дневнику питания — и выявление причин избыточного веса",
      "4-5 online-консультаций",
      "План питания с вариантами блюд, продуктовая корзина, индивидуальный подбор продуктов",
      "Online поддержка с 09:00 до 21:00. Вы можете задавать вопросы не дожидаясь консультации",
      "Ежедневный/еженедельный анализ результатов",
      "Мотивационные задания при необходимости",
      "Комплексные рекомендации по изменению образа жизни",
    ],
    condition: "5900 руб. | 28 дней"
  }
]

export default () =>
  <section className='section services'>
    <div className="container">
      <h2 className='title'>Услуги</h2>
      <div className="columns">
        {content.map((data) => <Card {...data} />)}
      </div>
      {/* <div className="card challenge">
        <header className="card-header">
          <div className="card-header-title">
            Марафон с Мэри
          </div>
        </header>
        <div className="card-content">
          <ul>
            что-то новое!
          </ul>
        </div>
        <footer className="card-footer">
          <div className="condition">условие</div>
          <button className="button is-medium is-primary">Заказать звонок</button>
        </footer>
      </div> */}
    </div>
  </section>
