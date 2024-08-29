function verificacao(dado){
  if(typeof dado == "number" ){
    console.log(`o dado passado é um number: ${dado}`)
  }else if(typeof dado == "boolean"){
    console.log(`o dado passado é um boolean: ${dado}`)
  } else if(typeof dado == "string"){
    console.log(`o dado passado é uma string: ${dado}`)
  }
}

verificacao(dado = 12)