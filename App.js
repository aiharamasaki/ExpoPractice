import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TestListScreen from './src/screens/TestListScreen';
import TestDetailScreen from './src/screens/TestDetailScreen';
import TestAnswerScreen from './src/screens/TestAnswerScreen';
import YoutubeScreen from './src/screens/YoutubeScreen';
import Youtube7Screen from './src/screens/Youtube7Screen';
import StaffScreen from './src/screens/StaffScreen';

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
    headerTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: '#E31676',
    },
  },
});

export default createAppContainer(App);
