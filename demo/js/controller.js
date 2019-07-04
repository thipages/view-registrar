import {ID as ID0} from "./views/page0.js";
import {updateView} from "../../esm/registrar.js";
import {ID as ID1} from "./views/page1.js";

export const listener=(id,data) => {
    if (id===ID0) updateView(ID1,"from Page 0");else updateView(ID0,"from Page 1");
};