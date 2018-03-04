import glamorous from 'glamorous';

export const Title = glamorous.h1(
    {
        display: 'block',
        margin: 0
    },
    ({ theme, color = 'default' }) => ({
        ...theme.typography.title,
        color: getColor(color)
    })
);

function getColor(colorProp, theme) {
    switch (colorProp) {
        case 'default':
            return undefined;
        case 'inherit':
            return 'inherit';
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        case 'textSecondary':
            return theme.palette.text.secondary;
        case 'error':
            return theme.palette.error.main;
    }
}
