const pessoas = [ 
    {id: 1, nome: 'Samuel', sexo: 'M', idade: 21, salario: 2000}, 
    {id: 2, nome: 'Marcos', sexo: 'M', idade: 20, salario: 2000}, 
    {id: 3, nome: 'Milena', sexo: 'F', idade: 17, salario: 2000} ]

let result = pessoas.reduce( (valorInicial, valores) => {
    valorInicial + valores.salario ,0 
    //console.log(valorInicial)
    console.log(typeof valores )
})

//console.log(result)