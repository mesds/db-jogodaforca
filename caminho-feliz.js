const  Forca  =  require ( '../desafio/forca' ) ;
const  validarEtapa  =  require ( './validar-etapa' ) ;

const  palavraSecreta  =  'abacaxi' ;
const  jogoForca  =  new  Forca ( palavra Secreta ) ;

let  estadosEstaoCorretos  =  validarEtapa ( 6 ,  '_______' ,  '' ,  'guardando chute' ,  jogoForca ) ;

[ 'a' ,  'b' ,  'c' ,  'x' ,  'i' ] . forEach ( ( letra )  =  > jogoForca.chutar ( letra ) ) ; _

estadosEstaoCorretos  =  estadosEstaoCorretos  &&  validarEtapa ( 6 ,  'abacaxi' ,  'abcxi' ,  'ganhou' ,  jogoForca ) ;
const  mensagemFinal  =   estadosEstaoCorretos  ==  true ? "Regras validadas com sucesso" :
"Parece que algo está errado, verique suas regras" ;
consola . log ( mensagemFinal ) ;
