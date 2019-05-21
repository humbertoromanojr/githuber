import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Organizations from '~/pages/Organizations';

const Routes = (userLogger = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator({
        Repositories,
        Organizations,
      }),
    },
    {
      initialRouteName: userLogger ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;
