import React from 'react'
import PropTypes from 'prop-types';
import './IconList.css'

export function IconList({ imageSrc, listText }) {
    return (
        <li className='home-list-item'>
            <div className='home-list-icon'>
                <img src={imageSrc}
                    alt=" "
                    className='icon-list' />
            </div>
            <span
            className='list-icon__text'
            >
                {listText}
            </span>
        </li>
    )
}

IconList.propTypes = {
    imageSrc: PropTypes.string,
    listText: PropTypes.string
};

IconList.defaultProps = {
    imageSrc: 'fa fa-bullseye fa-2x',
    listText: 'Icon text'
};