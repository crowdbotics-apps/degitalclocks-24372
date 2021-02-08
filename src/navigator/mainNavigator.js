import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList202236Navigator from '../features/ArticleList202236/navigator';
import ArticleList202235Navigator from '../features/ArticleList202235/navigator';
import ArticleList202234Navigator from '../features/ArticleList202234/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList202236: { screen: ArticleList202236Navigator },
ArticleList202235: { screen: ArticleList202235Navigator },
ArticleList202234: { screen: ArticleList202234Navigator },

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
