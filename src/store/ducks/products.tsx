export const Types = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST'
}

type payloadType = {
    type: string,
    products: object
}

const INITIAL_STATE = {
    products: []
}

export default function productsReducer(state = INITIAL_STATE, payload: payloadType)
{
    switch(payload.type)
    {
        case Types.SET_PRODUCT_LIST:
            return {
                ...state,
                products: payload.products
            }
        default:
            return state
    }
}

export const Actions = {
    setProductList: (products: object) => {
        return {
            type: Types.SET_PRODUCT_LIST,
            products
        }
    }
}