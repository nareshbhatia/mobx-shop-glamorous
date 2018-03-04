import glamorous from 'glamorous';

export const AppBar = glamorous.header(
    {
        position: 'static'
    },
    ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: theme.shadows[4]
    })
);
