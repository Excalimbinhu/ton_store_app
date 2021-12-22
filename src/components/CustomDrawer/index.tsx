import 'react-native-gesture-handler';
import { View } from 'react-native'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';
import ProductList from '../ProductList';
import { Appbar } from 'react-native-paper';
import { connect } from 'react-redux';

type CustomDrawerProps = {
  drawerProps: DrawerContentComponentProps,
  cartState: any
}

function CustomDrawer(props: CustomDrawerProps) {
  const { drawerProps, cartState } = props

  let cartTotal = 0
  
  if(cartState.products.length > 0)
    cartTotal = cartState.products.map((prod: any) => prod.price)
                                  .reduce((acc: number, cur: number) => acc + cur)

  return (
    <View style={{height: '100%'}}>
      <Appbar.Header>
        <Appbar.Content title='Cart' subtitle={`Total: R$ ${cartTotal.toFixed(2)}`} />
      </Appbar.Header>
      <DrawerContentScrollView {...drawerProps}>
        <ProductList cart={true} />
      </DrawerContentScrollView>
    </View>
  );
}

const mapStateToProps = (store: any) => {
  return {
    cartState: store.cart
  }
}

export default connect(mapStateToProps)(CustomDrawer)