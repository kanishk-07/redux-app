// BalanceReducer doesn't mean it would reduce only.
// It means it will play with balance

const reducer = (state=0, action) => {
    if(action.type==='increase') {
        return (state + action.payload);
    }
    else if(action.type==='decrease') {
        return (state - action.payload);
    }
    else {
        return state;
    }
}

export default reducer;