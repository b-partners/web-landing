import React from 'react'
import logo from '../../../assets/img/logo.png';

export function Description() {
  return (
    <section className='description section bd-container'>
      <div className='description__container'>
        <div className='description__col1'>
          <h2>À propos</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className='description__col2'>
          <img src={logo} alt='logo'
          className='description__logo'
          />
        </div>
      </div>
    </section>
  )
}
