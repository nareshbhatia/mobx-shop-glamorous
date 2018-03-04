import glamorous from 'glamorous';

export const IconButton = glamorous.button(
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
        textAlign: 'center',
        flex: '0 0 auto'
    },
    ({ theme, color = 'default' }) => ({
        fontSize: theme.typography.pxToRem(24),
        width: theme.spacing.unit * 6,
        height: theme.spacing.unit * 6,
        color: getColor(color),
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        })
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
