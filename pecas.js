let pesoPeca = 150

if(pesoPeca > 100) {
    console.log ("Peso maior que 100g, logo, podemos cadastrar a peça")
}else{
    console.log("Peso insulficiente, não é possivel cadastrar.")
} 

let numeroPecas = 10

if(numeroPecas < 10) {
    console.log ("Ainda há espaço na caixa, podemos cadastrar a peça")
}else{
    console.log ("Não há espaço disponivel na caixa")
}

let nomePeca = "Disco de freio"

console.log( "o comprimento do nome da peça é", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, nâo podemos cadastrar")
    }else{
    console.log("Nome de peça adequado, podemos cadastrar")
    }
