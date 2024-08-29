function numeroAleatorio(numMin, numMax){
  
  if (numMin > numMax){
    console.log("Este valor esta acima do esperado!")
  } else{  
    return Math.floor(Math.random() * ( numMax - numMin )) + numMin; //O Math.random() retorna um numero aleatorio enquanto o Math.florr retorna um numero inteiro xdd
  }
}

console.log(numeroAleatorio(2, 20000))