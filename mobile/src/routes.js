import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({ 
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Belém Music Pro'
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Perfil no Linkedin'
        }
    },
  }, {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
              backgroundColor: '#CD3700',

          },
      },
  })
);

export default Routes;
