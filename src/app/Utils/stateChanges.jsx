const statesDic = {
    0: "#fff",
    1: "#4caf50",
    2: "#ffc107",
    3: "#9e9e9e",
};

export function changeState(state) {
    return statesDic[state % 4];
}
