import {ID as ID0} from "./views/page0.js";
import {ID as ID1} from "./views/page1.js";
export const model= {
    data1:1,
    data2:2
};

export const access=(id)=> {
    switch (id) {
        case ID0:
            return ["data1"];
        case ID1:
            return ["data2"]
    }
};