import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IntoSlider from '../components/IntoSlider';
import Home from '../screens/Home';

const mainStack = createStackNavigator(
  {
    onBoardScreen: {
      screen: IntoSlider,
    },
    HomeScreen: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'onBoardScreen',
  }
);

const ScreenContainer = createAppContainer(mainStack);

export default ScreenContainer;
