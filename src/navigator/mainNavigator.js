import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial123547Navigator from '../features/Tutorial123547/navigator';
import NotificationList123519Navigator from '../features/NotificationList123519/navigator';
import Settings123518Navigator from '../features/Settings123518/navigator';
import Settings123510Navigator from '../features/Settings123510/navigator';
import UserProfile123508Navigator from '../features/UserProfile123508/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial123547: { screen: Tutorial123547Navigator },
NotificationList123519: { screen: NotificationList123519Navigator },
Settings123518: { screen: Settings123518Navigator },
Settings123510: { screen: Settings123510Navigator },
UserProfile123508: { screen: UserProfile123508Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
