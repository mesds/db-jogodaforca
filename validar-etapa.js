const  validarEtapa  =  ( vidasEsperadas , palavra  Esperada , letrasChutadasEsperadas ,  estadoEsperado , jogoForca ) => {    
    const  { vidas ,  palavra : arrPalavra ,  letrasChutadas : arrLetrasChutadas  }  =  jogoForca . buscarDadosDoJogo ( ) ;
    const  palavra  =  arrPalavra . juntar ( '' ) ;
    const  letrasChutadas  =  arrLetrasChutadas . juntar ( '' ) ;
    const  estado  =  jogoForca . buscarEstado ( ) ;

    retornar  vidas  === vidas  Esperadas
        &&  palavra  === palavra  Esperada
        &&  letrasChutadas  ===  letrasChutadasEsperadas
        &&  estado  ===  estadoEsperado ;
}

módulo . exportações  =  validarEtapa ;
