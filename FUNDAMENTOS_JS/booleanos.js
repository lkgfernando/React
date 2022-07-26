let isActive = false

console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

console.log('======Os verdadeiros======')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('======Os falsos======')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('Exemplo de atribuição em variavel com a condição OU ||')
let nome = ''
let var1 = nome || 'Caso seja a variavel nome seja vazia usa essa como padrão'
console.log(!!var1)

console.log(!!('' || null || ' '))