import 'react-native-gesture-handler';

import { createDrawerNavigator, DrawerHeaderProps, DrawerNavigationOptions } from '@react-navigation/drawer';
import Dashboard from '../Dashboard';
import { CustomDrawer } from '../../components';
import AppHeader from '../../components/AppHeader';

const Drawer = createDrawerNavigator();

const drawerOptions: DrawerNavigationOptions = {
  header: (props: DrawerHeaderProps) => <AppHeader {...props}/>,
  drawerPosition: 'right'
}

function App() {
  return (
    <Drawer.Navigator screenOptions={drawerOptions} drawerContent={(props) => <CustomDrawer drawerProps={{ ...props }} />}>
      <Drawer.Screen name="Store" component={Dashboard} />
    </Drawer.Navigator>
  );
}

export default App;