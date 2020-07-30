import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const REVIEWS_DATA = [
  {
    imgSrc: 'https://bulma.io/images/placeholders/128x128.png',
    title: 'Name Surname 1',
    subtitle: '25 y.o.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
  },
  {
    imgSrc: 'https://bulma.io/images/placeholders/128x128.png',
    title: 'Name Surname 2',
    subtitle: '25 y.o.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
  },
  {
    imgSrc: 'https://bulma.io/images/placeholders/128x128.png',
    title: 'Name Surname 3',
    subtitle: '25 y.o.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
  },
  {
    imgSrc: 'https://bulma.io/images/placeholders/128x128.png',
    title: 'Name Surname 4',
    subtitle: '25 y.o.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
  },
  {
    imgSrc: 'https://bulma.io/images/placeholders/128x128.png',
    title: 'Name Surname 5',
    subtitle: '25 y.o.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
  },
]

const ReviewBox = ({imgSrc, title, subtitle, text}) => <div className="box">
  <article className='media'>
    <div className='media-left'>
      <figure className='image is-96x96'>
        <img src={imgSrc} alt={title+' photo'}/>
      </figure>
    </div>
    <div className='media-content'>
      <div className='content'>
        <div class="title">{title}</div>
        <div class="subtitle">{subtitle}</div>
      </div>
    </div>
  </article>
</div>

export default () =>
  <section className='section reviews'>
    <div className="container">
      <h2 className='title'>Отзывы</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
      >
        {
          REVIEWS_DATA.map( (data, i) =>
            i % 2 === 0 &&
            <React.Fragment>
              <ReviewBox key={`key1-${i}`} {...data} />
              { REVIEWS_DATA[i+1] && <ReviewBox key={`key2-${i}`} {...REVIEWS_DATA[i+1]} /> }
            </React.Fragment>
          ).filter( el => el )
        }
      </Carousel>
    </div>
  </section>
