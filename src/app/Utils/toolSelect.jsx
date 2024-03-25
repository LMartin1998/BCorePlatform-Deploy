const toolDic = {
    progress: 0,
    spr: 1,
    hide: 2,
    oneHalfTT: 3,
    quarterHalfTT: 4,
    threeQuartersHalfTT: 5,
};

export function toolSelect(id) {
    return toolDic[id];
}