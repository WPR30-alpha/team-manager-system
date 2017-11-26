const initialState = {
    num: 0
}

// ===== ACTIONS ===== //
const TEST = "TEST";

// ===== REDUCER ===== //
export default function reducer (state = initialState, action){
    switch (action.type) {
        case TEST:
            return Object.assign({}, state, { num: state.num + action.payload })
        default:
            return state
    }
}

// ===== ACTION CREATORS ===== //

export function test (){
    return {
        type: TEST,
        payload: 7
    }
}