const  readline  =  require ( 'readline-sync' ) ;
const  Força  =  require ( './forca' ) ;

const  jogo  =  new  Forca ( 'abacaxi' ) ;

while  ( ! [ "perdeu" ,  "ganhou" ] . inclui ( jogo . buscarEstado ( ) ) )  {
    const  chute  =  readline . question ( "Aguardando calha: \n" ) ;
    jogo . chutar ( calha ) ;
    consola . log ( jogo . buscarDadosDoJogo ( ) ) ;
}

consola . log ( "você"  +  jogo . buscarEstado ( ) ) ;
