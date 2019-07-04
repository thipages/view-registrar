import {initReg, updateView} from "../esm/registrar.js";
import {ID as ID0} from "./views/page0.js";
import {ID as ID1} from "./views/page1.js";
import {model, modelAccess} from "./model.js";
const {render} = lighterhtml;
const listener=(id,data) => {
    if (id===ID0) updateView(ID1,"from Page 0");else updateView(ID0,"from Page 1");
};
const renderer=(data)=> render(document.getElementById("app"),()=>data);
initReg(model,listener, renderer, modelAccess);
updateView(ID0,"init");


