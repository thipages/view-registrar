const {html,render} = lighterhtml;
const bracketNotation=(entry)=>`[${entry[0]},${entry[1]}]`;
export const renderer=(data)=> render(document.getElementById("app"),()=>data);
export const objectToString=(source)=> Object.entries(source).reduce((target,s)=>target+=bracketNotation(s),"");
export const output=(text,data,sharedData,onclick)=>  html`
        <a href="#" onclick="${onclick}">${text}</a>
        <div>${data}</div>
        <div>shared Data : ${sharedData}</div>
    `;