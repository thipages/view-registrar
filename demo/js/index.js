import {initReg} from "../../esm/registrar.js";
import {model, access} from "./model.js";
import {ID as ID0} from "./views/page0.js";
import {ID as ID1} from "./views/page1.js";
import {renderer} from "./views/components.js";
//
export const listener=(id,data) => {
    if (id===ID0) updateView(ID1,"from Page 0");else updateView(ID0,"from Page 1");
};
const updateView=initReg(model,listener, renderer, access);
updateView(ID0,"init");


