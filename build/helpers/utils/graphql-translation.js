"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list = (list) => {
    return list.reduce((result, item) => ({ ...result, [item.lang]: item.value }), {});
};
const translate = (list, context) => {
    if (!context)
        return;
    if (!Array.isArray(list))
        list = [list];
    //   for(let item of list){
    //   item.setLanguage?.();
    //   }
};
exports.default = {
    list,
    translate,
};
