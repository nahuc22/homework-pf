function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    // El número es par, conviértelo a binario
    return numero.toString(2);
  } else {
    // El número es impar, conviértelo a hexadecimal
    return numero.toString(16);
  }
}




