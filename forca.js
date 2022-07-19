classe  Força  {

  chutar ( letra )  {

    função  éNum ( val ) {
      volte  ! isNaN ( val )
    }

    function  validarQuantidadeDeDigitos ( val ) {
        if  ( val . comprimento  >  1 ) {
          consola . log ( "digite apenas uma letra" )
        }
        if  ( val . comprimento  <  1 ) {
          consola . log ( "digite pelo menos uma letra" )
        }
    }

    functionLetrasIncluídasChutadas  ( val , array ) { _ 
      if  ( array . some ( val ) ) {
          consola . log ( "a letra em questão já foi digitada, segue abaixo todas as letras já digitadas" ) ;
          consola . log ( array ) ;
      }
    }

    if ( isNum ( letra )  &&  letra  !=  undefined ) {
      consola . log ( "digite apenas letras" ) ;
      retorno ;
    }
    validarQuantidadeDeDigitos ( letra ) ;    
    incluirLetrasChutadas ( letra ) ;
   }
  

  buscarEstado ( )  {  return  "" ;  }  // Possiveis valores: "perdeu", "guardando chute" ou "ganhou"

  buscarDadosDoJogo ( )  {
      retornar  {
          letrasChutadas : [ ] ,  // Deve conter todas as letras chutadas
          : 6 ,  // Quantidade de vidas restantes
          palavra : [ ]  // Deve ser um array com as letras que já foram acertadas ou o valor_" para as letras não foram identificadas "
      }
  }
}

módulo . exportações  =  Força ;
