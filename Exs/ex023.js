function maxCaract(texto){

texto = prompt("Insira algo para acorrer a contagem de caracteres:")
let a = texto.length
if (a <= 10) {
  console.log("texto dentro do limite")
} else{
  console.log("texto muito longo")
}

}

maxCaract()