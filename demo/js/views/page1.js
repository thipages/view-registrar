import {register} from "../../../esm/registration.js";
import {output,objectToString} from "./components.js";
export const ID="PAGE_1";
const updateView=(data)=> output(ID,data,objectToString(reg().sharedData),onclick);
const onclick=()=>reg().listener();
let reg=register(ID,updateView);