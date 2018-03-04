import React, { Component } from 'react';
import { css } from 'glamor';
import { ThemeProvider } from 'glamorous';
import { observer, Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from 'shared/stores';
import blue from 'shared/theme/colors/blue';
import pink from 'shared/theme/colors/pink';
import red from 'shared/theme/colors/red';
import createMuiTheme from 'shared/theme/styles/createMuiTheme';
import { history } from 'shared/utils';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

css.global('html', {
    height: '100%',
    boxSizing: 'border-box'
});

css.global('*, *:before, *:after', {
    boxSizing: 'inherit'
});

css.global('#root', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
});

@observer
class App extends Component {
    render() {
        const { paletteType } = rootStore.appStore;
        const palette = {
            primary: {
                main: blue[500]
            },
            secondary: {
                main: pink.A400
            },
            error: {
                main: red.A400
            },
            type: paletteType,
            // Initialize background to white (default is #fafafa)
            // This allows pictures with white background to blend in.
            background: {
                default: paletteType === 'light' ? '#ffffff' : '#303030'
            }
        };
        const theme = createMuiTheme({ palette });

        css.global('body', {
            height: '100%',
            margin: 0,
            background: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            color: theme.palette.text.primary,

            // Helps fonts on OSX look more consistent with other systems
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',

            // Use momentum-based scrolling on iOS devices
            WebkitOverflowScrolling: 'touch'
        });

        return (
            <ThemeProvider theme={theme}>
                <Provider rootStore={rootStore}>
                    <Shell />
                </Provider>
            </ThemeProvider>
        );
    }
}

export default App;
