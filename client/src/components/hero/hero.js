import React from 'react';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Mary from './mary.png';

export default class Hero extends React.Component {

    state = {
      showModal: false
    }

    open = () => { this.setState({ showModal: true }) }
    close = () => { this.setState({ showModal: false }) }

    render () {
      return (
      <section className="hero">
        <div className={ this.state.showModal ? "modal is-active" : "modal"}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <form>
                <div className="field">
                  <label className="label">Имя и Фамилия</label>
                  <div className="control">
                    <input className="input" type="text" name="name" required/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Телефон</label>
                  <div className="control">
                    <ReactPhoneInput
                      inputProps={{
                        name: 'phone',
                        required: true
                      }}
                      country={"ru"}
                      inputClass={"input"}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" name="email" required/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-link">Отправить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.close} ></button>
        </div>
        <div className="container">
          <div className="hero-body">
            <div className="columns is-vcentered">
              <div className="column is-two-thirds">
                <h2 className="title">6 недельный авторский интенсив осознанной стройности Марии Ильиных</h2>
                <p className="subtitle green">Старт 22 февраля</p>
                <p className="subtitle">Моя специализация - оптимизация веса. Своим подопечным я помогаю разобраться в истинных причинах лишнего веса и разрешить их. На сессиях мы восстанавливаем связь с телом, учимся понимать его сигналы и удовлетворять потребности. Научившись заботиться о себе с помощью питания, проблема лишнего веса уходит навсегда</p>
                {/* <p className="subtitle">В своей практике я руководствуюсь принципами рационального сбалансированного питания. Со мной вы не будете считать калории, а научитесь питаться осознанно</p> */}
                <button className="button is-medium is-primary" onClick={this.open} >Записаться на консультацию</button>
                &nbsp;
                &nbsp;
                <button className="button is-medium">Заказать звонок</button>
              </div>
              <div className="column"><img alt="Мария Ильиных" src={Mary}/></div>
            </div>
          </div>
        </div>
      </section>
      )
    }
}
