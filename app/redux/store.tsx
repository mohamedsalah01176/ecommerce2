import { configureStore } from "@reduxjs/toolkit";
import { updates } from "./slice/slicecart";




let store=configureStore({
    reducer: {
    
        update:updates
    }
});

export default store