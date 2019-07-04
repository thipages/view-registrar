let register = new Map();
let reg, render, modelAccess;
const l=(id)=>(data)=>reg.listener(id,data);
export const initReg=(sharedData, listener, _render, _modelAccess)=> {
    if (!reg) {
        reg={sharedData,listener};
        render=_render;
        modelAccess=_modelAccess;
    }
};
export const addReg=(id, updater)=> {
    register.set(id,updater);
    return ()=>({
        sharedData:modelAccess?filterModel(reg.sharedData,modelAccess(id)):reg.sharedData,
        listener:l(id)
    });
};
export const updateView=(id, data)=> render(register.get(id)(data));
export const filterModel = (model,keyAllowed)=> Object.keys(model)
    .filter(key => keyAllowed.includes(key))
    .reduce((obj, key) => {
        obj[key] = model[key];
        return obj;
    }, {});