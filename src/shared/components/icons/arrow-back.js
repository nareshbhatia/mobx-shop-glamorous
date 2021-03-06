import React from 'react';
import pure from 'recompose/pure';
import { SvgIcon } from './svg-icon';

let ArrowBack = props => (
    <SvgIcon {...props}>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </SvgIcon>
);

ArrowBack = pure(ArrowBack);

export default ArrowBack;
