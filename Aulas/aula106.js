// recursao é pesado por isso opte por nao faze-lo

function recursao(n){
if(n - 1 < 2){
  console.log("recursao parou")
} else if(n % 2  != 0){
  console.log(`O numero ${n} é impar`)
  recursao(n - 2;)
} else{
  console.log(`O numero ${n} é par`)
  recursao(n - 2)
}
}
recursao(22); 
recursao(13);