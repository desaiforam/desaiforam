import { configureStore } from "@reduxjs/toolkit"
import  Authredaucre  from "./action/AuthAction"

const middleware = (getDefaultMiddleware) => {
    return getDefaultMiddleware({
        serializableCheck: false
    })
}
const store = configureStore({
    reducer: { Auth: Authredaucre },

    middleware: (getDefaultMiddleware) => {
        return middleware(getDefaultMiddleware)
    }
})

export default store