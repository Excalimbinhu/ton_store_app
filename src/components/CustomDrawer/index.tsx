import 'react-native-gesture-handler';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import ProductList from '../ProductList';

type CustomDrawerProps = {
    drawerProps: DrawerContentComponentProps
}

export default function CustomDrawer(props: CustomDrawerProps) {
  return (
    <DrawerContentScrollView {...props.drawerProps}>
        <ProductList cart={true}/>
    </DrawerContentScrollView>
  );
}