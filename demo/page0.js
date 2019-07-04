import {register} from "../esm/registration.js";
const {html} = lighterhtml;
export const ID="PAGE_0";
const updater=(data)=> {
    return html`<a href="#" onclick="${onclick}">Page 0</a>`;
};
const onclick=()=>reg().listener();
let reg=register(ID,updater);