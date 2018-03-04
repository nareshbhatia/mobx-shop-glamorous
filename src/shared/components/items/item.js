import React from 'react';
import glamorous from 'glamorous';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { ItemInfo } from './item-info';
import { ItemPhoto } from './item-photo';

const ItemContainer = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer'
    },
    ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing.unit * 2
    })
);

@observer
export class Item extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        itemClicked: PropTypes.func.isRequired
    };

    render() {
        const { item } = this.props;

        return (
            <ItemContainer key={item.id} onClick={this.handleClick}>
                <ItemPhoto photo={item.photo} />
                <ItemInfo item={item} />
            </ItemContainer>
        );
    }

    handleClick = () => {
        const { item, itemClicked } = this.props;
        itemClicked(item.id);
    };
}
