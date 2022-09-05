let initialState = {
    likes:0
}

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case 'inc':
            return {
                ...state,
                likes:state.likes + action.payload
            }

        case 'dec':
            return {
                ...state,likes:state.likes - action.payload
            }

        default:
            return state.likes
    }
}

export default reducer