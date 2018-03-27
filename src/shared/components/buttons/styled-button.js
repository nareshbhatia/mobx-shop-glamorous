import glamorous from 'glamorous';
import { fade } from '../../theme/styles/colorManipulator';

export const StyledButton = glamorous.button(
    {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent', // Reset default value
        outline: 'none',
        border: 0,
        margin: 0, // Remove the margin in Safari
        borderRadius: 0,
        padding: 0, // Remove the padding in Firefox
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        MozAppearance: 'none', // Reset
        WebkitAppearance: 'none', // Reset
        textDecoration: 'none',
        // So we take precedent over the style of a native <a /> element.
        color: 'inherit',
        '&::-moz-focus-inner': {
            borderStyle: 'none' // Remove Firefox dotted outline.
        },
        lineHeight: '1.4em', // Improve readability for multiline button.
        boxSizing: 'border-box'
    },
    ({ theme, color = 'default' }) => ({
        ...theme.typography.button,
        minWidth: theme.spacing.unit * 11,
        minHeight: 36,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        borderRadius: 2,
        color: getColor(color),
        transition: theme.transitions.create(
            ['background-color', 'box-shadow'],
            {
                duration: theme.transitions.duration.short
            }
        ),
        '&:hover': {
            textDecoration: 'none',
            // Reset on mouse devices
            backgroundColor: fade(theme.palette.text.primary, 0.12),
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            },
            '&$disabled': {
                backgroundColor: 'transparent'
            }
        }
    })
);

function getColor(colorProp, theme) {
    switch (colorProp) {
        case 'default':
            return theme.palette.action.active;
        case 'inherit':
            return 'inherit';
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        case 'disabled':
            return theme.palette.action.disabled;
    }
}
