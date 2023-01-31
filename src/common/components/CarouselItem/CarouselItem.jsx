import React from 'react';

import PropTypes from 'prop-types';

import './CarouselItem.css';

export function CarouselItem({ title, paragraph, name, company, imageSrc="" }) {
  return (
    <div className="carousel__item">
      <h3>{title}</h3>
      <p className="testimonial__text">{paragraph}</p>
      <div className="carousel__item__image">
        <img src={imageSrc} alt={imageSrc} />
        <p>
          {name} <br />
          <b>{company}</b>
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
};

CarouselItem.defaultProps = {
  title: 'Application super EFFICACE',
  paragraph: 'Carousel paragraph',
  imageSrc: 'Testimonial1',
  name: 'Anna M.',
  company: 'MyFarm',
};
