function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

console.log(laCajaDePandora(20)); 
console.log(laCajaDePandora(15));  



