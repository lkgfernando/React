const escola = "Fernando"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(`Valor da tabela ASC na posição 3 do caracter: ${escola.charCodeAt(3)}`)
console.log(`Localiza em qual indice se encontra a letra d: ${escola.indexOf('d')}`)

console.log(`Mostre para mim a string apartir do indice 2: ${escola.substring(2)}`)
console.log(`Mostre apenas os ultimos 4 caracters da variavel escola: ${escola.substring(8, 12)}`)

console.log(`${escola.concat(" José").concat(" Rodrigues")}`)
console.log(escola + " José" + " Rodrigues")

console.log(`${escola.replace('ernando', 'ERNANDO')}`)

console.log('Fernando,Kauan,Livia'.split(','))

