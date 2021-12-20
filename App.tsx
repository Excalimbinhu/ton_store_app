import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from './src/containers';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Dashboard}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}