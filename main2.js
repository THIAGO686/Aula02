//validar se o valor é negativo, zero ou positivo

var numeroUsuario = 0

if (numeroUsuario >= 0) {
    //if dentro de if gera uma segunda validaçao
    if(numeroUsuario == 0){
        console.log("O numero é zero")
    }else{
        console.log("o numero é positivo")
    }
} else {
    console.log ("o numero é negativo")
}

