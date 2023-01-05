export const saveFish = (fish) => {
    return {
        type: "SAVE_FISH",
        payload: fish
    }
}

export const forgetFish = (fish) => {
    return {
        type: "FORGET_FISH",
        payload: fish
    }
}