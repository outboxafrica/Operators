
export const initialState = {
    user: [],
};
export const actionTypes = {
    SET_USER: "SET_USER",
};

console.log("STATEAPI: "+initialState.user);

 const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                // user:[...state.user, action.user]
            };
        default:
            return state;
    }
};

export default reducer;