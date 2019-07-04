import {register} from "../esm/registration.js";
export const ID="PAGE_1";
const {html} = lighterhtml;
const updater=(data)=> {
    return html`<a href="#" onclick="${onclick}">Page 1</a>`;
};
const onclick=()=>reg().listener();
let reg=register(ID,updater);