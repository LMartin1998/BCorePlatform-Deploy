const filterDic = {
    "show-torque-tube": 0,
    "show-MODS": 1,
    "show-panels": 2,
    "show-both": 3,
};

export function filterSelect(id) {
    return filterDic[id];
}