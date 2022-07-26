const valores = [10.5, 11.6, 7.9, 9.5, 11.5]
let nX = 0
let nFator = 0
console.log(valores.length)



valores.push(5.3,78,1,2,3,4,5,6,7,8,9,10) //Inclui valores no array

console.log(valores)

while (nFator <= 10) { 

  while (nX < valores.length) {
    
      console.log(valores[nX] + " X " + nFator + " = "+ valores[nX] * nFator)
      nX += 1
      
  }
  nX = 0
  nFator += 1
}

console.log(valores.pop())
console.log(valores)

valores.push(10)
console.log(valores)

delete valores[5]
console.log(valores)

while (nX < valores.length) {
    
  console.log(valores[nX] + " X " + nFator + " = "+ valores[nX] * nFator)
  nX += 1
  
}