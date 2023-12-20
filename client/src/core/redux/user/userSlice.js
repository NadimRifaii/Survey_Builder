import { createSlice } from "@reduxjs/toolkit"
/**
 * Importing createSlice: createSlice is a function provided by Redux Toolkit that abstracts
 * away the boilerplate code usually associated with creating action creators and action types.
 */
const initialState = {
    username: "",
    email: "",
    role: ''
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            const { username, email, role } = action.payload
            return {
                username,
                email,
                role
            }
        },
    },
})

export const { setUser } = userSlice.actions
/**
 * The actions created by createSlice are exported so they can be dispatched elsewhere in the application.
 */
export const user = userSlice.name
// Here, user is used as a key to access the user slice from the global state. Since user
export default userSlice.reducer
/**
 * The reducer function created by createSlice is exported as the default export of this module.
 * This reducer function will be combined with the other reducers in the application to create the root reducer.
 */
export const extractUserSlice = (global) => {
    return global[user]
}
/**
 * In Redux, the global state refers to the state that is managed by the Redux store.
 * This state is global because it is accessible from anywhere within the application.
 */
