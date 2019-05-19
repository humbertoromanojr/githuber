import { createAppContainer, createSwitchNavigation } from 'react-native';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
// import Organizations from '~/pages/Organizations';

const Routes = createAppContainer(
  createSwitchNavigation({
    Welcome,
    Repositories,
  }),
);

export default Routes;
