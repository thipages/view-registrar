import {initReg, updateView} from "../esm/registrar.js";
import {model, modelAccess} from "./model.js";
import {listener} from "./controller.js";
import {ID as ID0} from "./views/page0.js";
const {render} = lighterhtml;
const renderer=(data)=> render(document.getElementById("app"),()=>data);
initReg(model,listener, renderer, modelAccess);
updateView(ID0,"init");


