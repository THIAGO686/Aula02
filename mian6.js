//°F=(°C x 1,8) = 32
//C = (°F - 32 )x 5/9

var temperatura = 50
var tipoTemperatura = "F"
var temperaturaConvertida = 0

if (tipoTemperatura == "C" ){
    console.log ("Voce escolheu celcius!")
    temperaturaConvertida = ((temperatura * 1.8 )+ 32)

}else{
    console.log ("Voce escolheu Fahrenheit!")
    temperaturaConvertida = ((temperatura -32 ) * (5/9))
}
console.log("O valor Convertido é " + temperaturaConvertida )