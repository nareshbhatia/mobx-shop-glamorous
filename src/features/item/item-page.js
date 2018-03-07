import React from 'react';
import glamorous from 'glamorous';
import { inject, observer } from 'mobx-react';
import {
    BackButton,
    BusyIndicator,
    HeaderLayout,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    ScrollingContent
} from 'shared/components';

const ItemContainer = glamorous.div(
    {
        display: 'flex',
        flexDirection: 'row'
    },
    ({ theme }) => ({
        padding: theme.spacing.unit * 2
    })
);

@inject('rootStore')
@observer
export class ItemPage extends React.Component {
    render() {
        const { rootStore } = this.props;
        const { isLoading, selectedItem: item } = rootStore.itemStore;

        return (
            <HeaderLayout NavButton={BackButton}>
                <ScrollingContent>
                    {isLoading ? (
                        <BusyIndicator />
                    ) : (
                        <ItemContainer>
                            <ItemPhoto photo={item.photo} />
                            <ItemInfo item={item} />
                            <ItemOrder rootStore={rootStore} item={item} />
                        </ItemContainer>
                    )}
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
