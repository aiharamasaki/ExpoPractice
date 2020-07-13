import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TestListScreen from './src/screens/TestListScreen';
import TestDetailScreen from './src/screens/TestDetailScreen';
import TestAnswerScreen from './src/screens/TestAnswerScreen';
import YoutubeScreen from './src/screens/YoutubeScreen';
import Youtube7Screen from './src/screens/Youtube7Screen';
import StaffScreen from './src/screens/StaffScreen';
import TestList from './src/components/TestList';

const App = createStackNavigator({
  Home:       { screen: TestListScreen },
  TestDetail: { screen: TestDetailScreen },
  TestAnswer: { screen: TestAnswerScreen },
  Youtube:    { screen: YoutubeScreen },
  Youtube7:   { screen: Youtube7Screen },
  Staff:      { screen: StaffScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'ひくラジ',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: '#E31676',
    },
  },
});

export default createAppContainer(App);
