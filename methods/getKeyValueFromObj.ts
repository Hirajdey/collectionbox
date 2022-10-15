
export function getKeyValueFromObj(obj:Object){
   const keyes = Object.keys(obj);
   const values = Object.values(obj);   
   return {keyes, values}
}