import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { SideBar } from './src/containers';
import { Provider } from 'react-redux';
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SideBar />
      </NavigationContainer>
    </Provider>
  );
}