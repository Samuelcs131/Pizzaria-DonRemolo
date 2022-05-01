const num =  999.00
let real = num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

console.log( real.split(',')[1]  )