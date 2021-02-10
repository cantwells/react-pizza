const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

const cart = ( state = initialState, action ) => {
    
    switch (action.type) {
        case 'SET_ADD_PIZZA':
            const newItem = {
                ...state.items,
                [action.payload.id]: (state.items[action.payload.id]) 
                ? [...state.items[action.payload.id], action.payload]
                : [action.payload]
            }
            const allPizzas = [].concat.apply([], Object.values(newItem));
            const totalPrice = allPizzas.reduce( (sum, pizza) => sum + pizza.price , 0 );

            return {
                ...state,
                items: newItem,
                totalCount: allPizzas.length,
                totalPrice 
            }

        default:
            return state;
    }
}

export default cart;