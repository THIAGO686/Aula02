var salario = 2000
var aumento = 0
if (salario > 2000 )
    {
        if (salario < 2001){
            aumento = (salario * 0.15) + salario
        }else{
            aumento = (salario * 0.10) + salario
        }

    }else{
        aumento = (salario * 0.20) + salario
    }
    console.log ("o salario de: " + aumento)
    
