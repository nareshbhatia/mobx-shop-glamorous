import React from 'react';
import { css } from 'glamor';
import { inject } from 'mobx-react';
import {
    ItemList,
    HeaderLayout,
    ScrollingContent,
    Title
} from 'shared/components';

const styles = {
    title: css({
        padding: '8px 0 0 16px',
        fontWeight: 'normal'
    })
};

@inject('rootStore')
export class HomePage extends React.Component {
    render() {
        const { rootStore } = this.props;
        return (
            <HeaderLayout>
                <ScrollingContent>
                    <Title className={styles.title}>Featured Items</Title>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
