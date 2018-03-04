import glamorous from 'glamorous';

export const Toolbar = glamorous.div(
    {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    ({ theme }) => ({
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    })
);
