module.exports = function reverse (n) {
  
  n = Math.abs(n).toString();
  
  let newStr = "";
 
  for(let i = n.length-1; i>=0; i--) {
    newStr += n[i];
    
  }

  return +newStr;
 
}
 