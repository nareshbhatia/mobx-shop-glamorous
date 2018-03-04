import glamorous from 'glamorous';

/**
 * FullHeightVerticalContainer - parent should be flex-direction: column
 */
export const FullHeightVerticalContainer = glamorous.div({
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
});

/**
 * CenteredContainer - parent should be flex-direction: column
 */
export const CenteredContainer = glamorous.div(
    {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    ({ theme }) => ({
        padding: theme.spacing.unit
    })
);

/**
 * ScrollingContent
 */
export const ScrollingContent = glamorous.div(
    {
        flex: 1,
        overflow: 'auto'
    },
    ({ theme }) => ({
        padding: theme.spacing.unit
    })
);
