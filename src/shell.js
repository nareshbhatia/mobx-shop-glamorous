import React from 'react';
import glamorous from 'glamorous';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
// import DevTools from 'mobx-react-devtools';
import {
    CheckoutPage,
    DepartmentPage,
    HomePage,
    ItemPage,
    ItemListPage,
    NotFoundPage,
    ProfilePage,
    ShoppingCart,
    SigninPage
} from 'features';

const { Div } = glamorous;

const viewMap = {
    checkout: <CheckoutPage />,
    department: <DepartmentPage />,
    home: <HomePage />,
    item: <ItemPage />,
    items: <ItemListPage />,
    notFound: <NotFoundPage />,
    profile: <ProfilePage />,
    shoppingCart: <ShoppingCart />,
    signin: <SigninPage />
};

@inject('rootStore')
export class Shell extends React.Component {
    render() {
        const { rootStore: { routerStore } } = this.props;

        return (
            <Div flex="1" display="flex" flexDirection="column">
                <RouterView routerStore={routerStore} viewMap={viewMap} />
                {/* <DevTools position={{top: 46, left: 25}} /> */}
            </Div>
        );
    }
}
