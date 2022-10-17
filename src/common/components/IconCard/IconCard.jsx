import React from 'react'
import PropTypes from 'prop-types';
import './IconCard.css';

export function IconCard({ icon, paragraph }) {
    return (
        <div className='solution__data__item'>
            <div className='icon-wrapper'>
                <i className={icon} />
            </div>
            <p>
                {paragraph}
            </p>
        </div>
    )
}

IconCard.propTypes = {
    icon: PropTypes.string,
    paragraph: PropTypes.string
};

IconCard.defaultProps = {
    icon: 'fa fa-bullseye fa-2x',
    paragraph: 'Icon card paragraph'
  };