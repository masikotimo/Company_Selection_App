import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';

const mainStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const ScreenContainer = createAppContainer(mainStack);

export default ScreenContainer;
