export const shorten = (s:string) => s.substr(0,99)+(s.length>100?'…':'');
