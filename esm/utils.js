export const filtered = (raw,allowed)=> Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
    }, {});