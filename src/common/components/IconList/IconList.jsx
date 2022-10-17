import React from 'react'
import PropTypes from 'prop-types';
import './IconList.css'

export function IconList({ icon, listText }) {
    return (
        <li className='home-list-item'>
            <div className='home-list-icon'>
                <i className={ icon } />
            </div>
            <span
            >
                { listText }
            </span>
        </li>
    )
}

IconList.propTypes = {
    icon: PropTypes.string,
    listText: PropTypes.string
};

IconList.defaultProps = {
    icon: 'fa fa-bullseye fa-2x',
    listText: 'Icon text'
  };