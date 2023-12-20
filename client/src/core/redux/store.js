import { configureStore } from "@reduxjs/toolkit"
import userSlice, { user } from "./user/userSlice"
import surveysSlice, { surveys } from "./surveys/surveysSlice"
const store = configureStore({
    reducer: {
        user: userSlice,
        surveys: surveysSlice
    },
})
export default store
// the store represents the global state