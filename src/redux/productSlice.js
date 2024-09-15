import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: "products slice",
    initialState,
    reducers: {
        setProducts: function (state, actions) {     //set state method defined
            state.product = actions.payload;
        },
        addProduct: (state, action) => {
            // Add new product at the beginning of the array
            state.product = [action.payload, ...state.product];
        },
        updateProduct: (state, action) => {
            const { id, name, price, stock, description, category } = action.payload;

            // Find the product index
            const index = state.product.findIndex(product => product.id === id);

            if (index !== -1) {
                // Update the product in the array
                state.product[index] = { ...state.product[index], name, price, stock, description, category };
            }
        },
        deleteProduct: (state, action) => {
            console.log("Action payload (product id):", action.payload); // Check if you're receiving the correct id
            state.product = state.product.filter((product) => product.id !== action.payload);
        }
    }
});


export const { setProducts , addProduct , updateProduct , deleteProduct } = productSlice.actions;

export default productSlice.reducer;