import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const { Div, Img } = glamorous;

export function ItemPhoto({ photo }) {
    return (
        <Div width={120}>
            <Img src={photo} display="block" width="100%" height="auto" />
        </Div>
    );
}

ItemPhoto.propTypes = {
    photo: PropTypes.string.isRequired
};
