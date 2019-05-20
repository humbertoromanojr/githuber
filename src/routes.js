import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
// import Organizations from '~/pages/Organizations';

const Routes = (userLogger = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repositories,
    },
    {
      initialRouteName: userLogger ? 'Repositories' : 'Welcome',
    },
  ),
);

export default Routes;
