let num = ""
function positivo(x){
  x = parseFloat(prompt("insira um numero negativo para torna-lo positivo"))
  if(x){
    num = Math.abs(x)
    alert(num)
  }
}

positivo()