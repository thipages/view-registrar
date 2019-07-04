export const bracketNotation=(entry)=>`[${entry[0]},${entry[1]}]`;
export const objectToString=(source)=> Object.entries(source).reduce((target,s)=>target+=bracketNotation(s),"");