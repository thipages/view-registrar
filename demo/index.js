import {initReg, updateView} from "../esm/registrar.js";
import {ID as ID0} from "./page0.js";
import {ID as ID1} from "./page1.js";
import {model} from "./model.js";
const {render} = lighterhtml;
const listener=(id,data) => {
    if (id===ID0) updateView(ID1,"from Page 0");else updateView(ID0,"from Page 1");
};
const renderer=(data)=> render(document.getElementById("app"),()=>data);
initReg(model,listener, renderer);
updateView(ID0,"init");


