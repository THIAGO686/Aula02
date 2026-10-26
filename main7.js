var num1 = 24
var num2 = 4

var operaçao = "-"
var resultado = 0

if (operaçao == "+"){
    resultado = num1 + num2
    console.log (resultado)
} else {
    if (operaçao == "-")
    {
        resultado = num1 - num2
        console.log (resultado)    
    }
    else
        if (operaçao == "*")
    {
        resultado = num1 * num2
        console.log (resultado)
    }else
        if (operaçao == "/")
        {
            resultado = num1 / num2
            console.log (resultado)
        }
}
