// import React from 'react';
// import { capitalize } from '../utils/helpers';
import glamorous from 'glamorous';

// export const styles = theme => ({
//   colorPrimary: {
//     color: theme.palette.primary.main,
//   },
//   colorSecondary: {
//     color: theme.palette.secondary.main,
//   },
//   colorAction: {
//     color: theme.palette.action.active,
//   },
//   colorDisabled: {
//     color: theme.palette.action.disabled,
//   },
//   colorError: {
//     color: theme.palette.error.main,
//   },
//   fontSize: {
//     width: '1em',
//     height: '1em',
//   },
// });
//
// SvgIcon.defaultProps = {
//   color: 'inherit',
//   fontSize: false,
//   viewBox: '0 0 24 24',
// };

export const SvgIcon = glamorous.svg(
    {
        display: 'inline-block',
        fill: 'currentColor',
        height: 24,
        width: 24,
        userSelect: 'none',
        flexShrink: 0
    },
    ({ theme }) => ({
        transition: theme.transitions.create('fill', {
            duration: theme.transitions.duration.shorter
        })
    })
);
