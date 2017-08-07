import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/view/Home';
import Profile from './src/components/view/Profile';
import withSideMenu from './src/components/withSideMenu';

const HomeWithSideMenu = withSideMenu(Home);
const ProfileWithSideMenu = withSideMenu(Profile);

const App = StackNavigator({
    Profile: { screen: ProfileWithSideMenu },
    Home: { screen: HomeWithSideMenu }
});

export default App;
