import { put, select } from 'redux-saga/effects';

import { CartTypes } from '../ducks';

function* addProductToCart(payload: any) {
    let { products } = yield select(store => store.cart);

    products.push(payload.newProduct)

    yield put({
        type: CartTypes.ADD_PRODUCT_SAGA,
        products
    })
}

function* removeProduct(payload: any) {
    let { products } = yield select(store => store.cart);

    products = products.filter((prod: any) => prod.id !== payload.productID)

    yield put({
        type: CartTypes.REMOVE_PRODUCT_SAGA,
        products
    })
}

export {
    addProductToCart,
    removeProduct
}