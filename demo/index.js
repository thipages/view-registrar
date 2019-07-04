import {initReg, updater} from "../esm/registrar.js";
import {ID as ID0} from "./page0.js";
import {ID as ID1} from "./page1.js";
const {render} = lighterhtml;
const sharedData= {
  data1:1,
  data2:2
};
const listener=(id,data) => {
    if (id===ID0) updater(ID1,"from Page 0");else updater(ID0,"from Page 1");
};
const renderer=(data)=> render(document.getElementById("app"),()=>data);
initReg(sharedData,listener, renderer);
updater(ID0);


