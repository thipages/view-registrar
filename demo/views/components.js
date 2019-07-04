const {html} = lighterhtml;
export const output=(text,data,sharedData,onclick)=>  html`
        <a href="#" onclick="${onclick}">${text}</a>
        <div>${data}</div>
        <div>shared Data : ${sharedData}</div>
    `;