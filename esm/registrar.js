let register = new Map();
let reg, render;
const l=(id)=>(data)=>reg.listener(id,data);
export const initReg=(sharedData, listener, _render)=> {
    if (!reg) {
        reg={sharedData,listener};
        render=_render;
    }
};
export const addReg=(id, updater)=> {
    register.set(id,updater);
    return ()=>({sharedData:reg.sharedData,listener:l(id)});
};
export const updater=(id,data)=> render(register.get(id)(data));