import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//  Store is the global state that saves the entire application's info
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})