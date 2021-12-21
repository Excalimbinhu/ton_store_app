import { all, takeLatest } from 'redux-saga/effects';

import { CartTypes } from '../ducks'
import {
  addProductToCart,
  removeProduct,
} from './cart';

export default function* rootSaga() {
  return yield all([
    yield takeLatest(CartTypes.ADD_PRODUCT, addProductToCart),
    yield takeLatest(CartTypes.REMOVE_PRODUCT, removeProduct),
  ])
}