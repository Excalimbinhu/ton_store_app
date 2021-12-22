import { View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { connect } from 'react-redux';

function X(props: any) {
    const { route, cartState } = props

    return (
        <Appbar.Header>
            <Appbar.Content title={route.name} />
            <View>
                <Appbar.Action icon="cart" color='white' onPress={() => props.navigation.openDrawer()}></Appbar.Action>
                <Badge visible={cartState.products.length > 0} style={{ position: 'absolute' }}>{cartState.products.length}</Badge>
            </View>
        </Appbar.Header>
    )
}

const mapStateToProps = (store: any) => {
    return {
        cartState: store.cart
    }
}

export default connect(mapStateToProps)(X)
