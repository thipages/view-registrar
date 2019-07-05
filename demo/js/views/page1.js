import {register} from "../../../esm";
import {output,objectToString} from "./components.js";
export const ID="PAGE_1";
const updateView=(data)=> output(ID,data,objectToString(reg().model),onclick);
const onclick=()=>reg().listener();
let reg=register(ID,updateView);