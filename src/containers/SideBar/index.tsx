import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Dashboard';
import { CustomDrawer } from '../../components';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator screenOptions={{drawerPosition: 'right'}} drawerContent={(props) => <CustomDrawer drawerProps={{...props}}/>}>
        <Drawer.Screen name="Home" component={Dashboard}/>
    </Drawer.Navigator>
  );
}