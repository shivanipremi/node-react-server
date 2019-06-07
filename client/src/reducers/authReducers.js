
let defaultState = {
    name:'prince'
}
export default function(state=defaultState, action) {
    console.log("Action::::", action)
    switch(action.type) {
        case 'fetch_user': return state
        default :
            return action;
    }
    return state
}