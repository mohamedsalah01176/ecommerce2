import { createSlice } from "@reduxjs/toolkit"

let initialState={update:false,updataCartProduct:false}

let updates1=createSlice({
    name: 'updates',
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            state.update = action.payload
        },
        updataCartProductfun: (state, action) => {
            state.updataCartProduct = action.payload
        },
    }
})

export  let updates=updates1.reducer
export const { updateStatus,updataCartProductfun } = updates1.actions