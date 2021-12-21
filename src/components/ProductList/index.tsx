import * as React from 'react';
import { View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, List } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CartActions } from '../../store/ducks';
import { ProductIcon, ProductImage, ProductItem } from './style';

type ProductListProps = {
    cart?: boolean,
    productsState: any,
    cartState: any,
    addNewProduct: Function,
    removeProduct: Function,
}

function renderListItens(props: ProductListProps)
{
    const {
        cart,
        productsState,
        cartState,
        addNewProduct,
        removeProduct
    } = props;

    let productList = cart ? cartState.products : productsState.products

    if(!cart)
    {
        const cartIds = cartState.products.map((cartProd: any) => cartProd.id)

        productList = productsState.products.filter((prod: any) => cartIds.indexOf(prod.id) === -1)
    }

    return productList
        .map((item: any) => {
        return(
            <View key={item.id}>
                <ProductItem title={item.title}
                    description={`R$${item.price.toFixed(2)}`}
                    left={() => <ProductImage source={{uri: item.image}} />}
                    right={() => <ProductIcon cart={cart}
                                    icon={cart ? "minus" : "plus"}
                                    color='white'
                                    onPress={() => {
                                        cart ? removeProduct(item.id)
                                        : addNewProduct(item)
                                    }}/>
                    }
                />
                <Divider style={{marginVertical: 5}}/>
            </View>
        )
    })
}

function ProductList(props: ProductListProps) {
    return (
        <List.Section>
            <ScrollView>
                {renderListItens(props)}
            </ScrollView>
        </List.Section>
    );
}

const mapStateToProps = (store: any) => ({
    productsState: store.products,
    cartState: store.cart
})

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(CartActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);