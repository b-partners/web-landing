import React from 'react';

import PropTypes from 'prop-types';

export function UseCaseItem({image}) {
    return (
        <div className="carousel__itm">
            <img
                className="carousel__img"
                src={image}
                alt={image}
            />
        </div>
    );
}

UseCaseItem.propTypes = {
    image: PropTypes.string.isRequired
};
