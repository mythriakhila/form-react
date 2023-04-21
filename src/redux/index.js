import { configureStore } from "@reduxjs/toolkit";
import logSlice from "./slice/logSlice";
import regSlice from "./slice/regSlice";
import subSlice from "./slice/subSlice";

const store = configureStore({
    reducer: {
        login: logSlice.reducer,
        register: regSlice.reducer,
        submit: subSlice.reducer
    }
})

export default store;