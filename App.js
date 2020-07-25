import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { palette } from './src/theme';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={palette.darkLimeGreen} />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        </>
    );
};

export default App;