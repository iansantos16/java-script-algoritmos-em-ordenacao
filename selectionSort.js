
 const livros = require ('./listaLivros');
 const menorValor = require ('./menorValor');


 // 2 maneiras, com o for ou forEach
    
 
                 //  COM O FOR

  for (let atual = 0; atual < livros.length; atual ++){
     let menor = menorValor(livros, atual)

     let livroAtual = livros[atual];

     let livroMenorPreco = livros[menor];
     

     livros[atual] = livroMenorPreco
     livros[menor] = livroAtual
    
 }

 console.log(livros)




                  //COM O FOR EACH

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)