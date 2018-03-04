import React from 'react';
import { css } from 'glamor';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Title, Toolbar } from 'shared/components';
import { CartButton, HomeButton } from './nav-buttons';
import LightbulbOutline from '../icons/light-bulb-outline';

const styles = {
    title: css({
        flex: 1,
        fontSize: 18
    })
};

@inject('rootStore')
export class Header extends React.Component {
    static propTypes = {
        NavButton: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        NavButton: HomeButton,
        title: 'MobX Shop'
    };

    render() {
        const { NavButton, title } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <NavButton />

                    <Title className={styles.title} color="inherit">
                        {title}
                    </Title>

                    <CartButton />

                    <IconButton
                        color="inherit"
                        onClick={this.handleToggleTheme}
                    >
                        <LightbulbOutline />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }

    handleToggleTheme = () => {
        const { rootStore: { appStore } } = this.props;
        appStore.toggleTheme();
    };
}
