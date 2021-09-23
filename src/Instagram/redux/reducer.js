import { combineReducers } from "redux";

function likesReducer(state = [], action) {
    // console.log(state)
    switch (action.type) {
        case 'AddinLikes':
            return [...state, action.payload]
        case 'RemovetoLikes':
            return state.filter((itm, indx) => itm !== action.payload)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    likes: likesReducer
})

export default rootReducer;