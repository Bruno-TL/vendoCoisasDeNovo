let texto = 'Mergulhando nas profudenzas';

//console.log(texto.indexOf('o'))//Sempre retorna um numero.
//console.log(texto.toUpperCase()) //Retorna um string com letras maiuscula.
//console.log(texto.substring(3,9)) //Retorna uma string.(posição incical, posição final -1)
//console.log(texto.concat('rio'))//COncatenando
//console.log(texto.split('.')) //Retorna um array de string, sendo divido pelo o '.'(podendo escolher como separar as string no arrasy pela o chart dentro dos parenteses)
//console.log(texto.split('')[0])//Foi separada, transformada e um array de string e escolhendo a string na posição 0
//console.log(texto.join())//Retorna um array em uma string.Separada por pattern ','
//console.log(texto.replace('nas', 'em')) // Retorna uma string mudando o primeiro valor pelo o segundo valor

let texto1 = 'Sofia Manzano'

//console.log(texto1.substring(0,5) + texto1.indexOf('f') + texto1.indexOf('o'))

let palavra = 'sofia';
let palavraNova = ''

for(i=palavra.length-1; i >= 0; i--){
palavraNova += palavra[i]
}
console.log(palavraNova)