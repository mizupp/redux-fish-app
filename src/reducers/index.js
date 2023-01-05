const initState = {
    message: "",
    savedFish: []
};

const reducer = (state=initState, action) => {
    switch(action.type) {
        case "SET":
            return {
                ...state,
                message: action.payload
            }
        case "DELETE":
            return{
                ...state,
                message: ""
            }
        case "SAVE_FISH":
            return {
                ...state,
                savedFish: [...state.savedFish, action.payload]
                }
        case "FORGET_FISH":
            return {
                ...state,
                savedFish: state.savedFish.filter(f => f["Scientific Name"] != action.payload["Scientific Name"])
            }
        default:
            return state;
    }
};

export default reducer;