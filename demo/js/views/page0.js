import {register} from "../../../esm/registrar.js";
import {output,objectToString} from "./components.js";
export const ID="PAGE_0";
const updateView=(data)=> output(ID,data,objectToString(reg().model),onclick);
const onclick=()=>reg().listener();
let reg=register(ID,updateView);