import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/components/view/Home';
import Profile from './src/components/view/Profile';
import withSideMenu from './src/components/withSideMenu';
import { Router, Scene } from 'react-native-router-flux';

const HomeWithSideMenu = withSideMenu(Home);
const ProfileWithSideMenu = withSideMenu(Profile);

const App = () => (
    <Router>
        <Scene key="root">
            <Scene type='replace' key="Home" component={HomeWithSideMenu} title="Home" panHandlers={null}/>
            <Scene type='replace' key="Profile" component={ProfileWithSideMenu} title="Profile" panHandlers={null}/>
        </Scene>
    </Router>
);

export default App;
