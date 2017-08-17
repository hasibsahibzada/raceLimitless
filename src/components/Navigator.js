import Home from './view/Home';
import Profile from './view/Profile';
import withSideMenu from './withSideMenu';
import { StackNavigator } from 'react-navigation';

const HomeWithSideMenu = withSideMenu(Home);
const ProfileWithSideMenu = withSideMenu(Profile);

const Navigator = StackNavigator({
    Profile: { screen: ProfileWithSideMenu },
    Home: { screen: HomeWithSideMenu }
});

export default Navigator;