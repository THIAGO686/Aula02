//while = enquanto
// opçao 1
var contador = 1
while (contador <= 3) {
    console.log("contador: " + contador) // 1 -> 2 -> 3
    contador = contador + 1

}
//opçao 2
contador = 3
while (true) {
    console.log("contador:" + contador) // 1 -> 2 -> 3

    if (contador == 3 ){
        break
    }
    contador = contador + 1 //2-> 3

}