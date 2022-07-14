export const increaseBalance = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: amount
        })
    }
}

export const decreaseBalance = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'decrease',
            payload: amount
        })
    }
}