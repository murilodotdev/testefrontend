// define um nome aleatório para cada corretor
const Corretor = document.getElementsByClassName("nome-corretor")

const nomes      = ['Ana', 'Maria', 'Laura', 'Júlia', 'João', 'Marcos', 'Caio']
const sobrenomes = ['Silva', 'Santos', 'Souza', 'Costa', 'de Sá']

for (let i = 0; i < Corretor.length; i++) {
    const element = Corretor[i];
    
    const indiceNome      = Math.floor(Math.random() * nomes.length);
    const indiceSobrenome = Math.floor(Math.random() * sobrenomes.length);
    
    element.innerText = `${nomes[indiceNome]} ${sobrenomes[indiceSobrenome]}`;
}

// define os pontos do corretor para uma quantidade aleatória
let pontos = document.getElementsByClassName("pontos-corretor")
for (let i = 0; i < pontos.length; i++) {
    const element = pontos[i];

    let numeroAleatorio = ""
    for (let i = 0; i < 5; i++) {
        switch (i) {
            case 1:
                numeroAleatorio += "."
                break
            default:
                let numero = Math.floor(Math.random() * 10)
                if (i == 0 && numero == 0) {
                    numeroAleatorio += 1
                } else {
                    numeroAleatorio += numero
                }
        }
    }

    element.innerText = (numeroAleatorio + " pontos")
}

// Gera um número aleatório
let numerosTelefone = document.getElementsByClassName("telefone-corretor")
for (let i = 0; i < numerosTelefone.length; i++) {
    const element = numerosTelefone[i];
    
    let numeroAleatorio = ""
    for (let i = 0; i < 13; i++) {
        switch (i) {
            case 0:
                numeroAleatorio += "("
                break
            case 3:
                numeroAleatorio += ") "
                break
            case 4:
                numeroAleatorio += "9 "
                break
            case 9:
                numeroAleatorio += "-"
            default:
                numeroAleatorio += Math.floor(Math.random() * 10)
        }
    }
    
    element.addEventListener('click', (e)=>{ 
        element.innerText = numeroAleatorio
    })
}

var textoCPF = ''
const campoCPF = document.getElementById("campo-cpf")
const labelCPF = document.getElementById("label-cpf")

campoCPF.addEventListener('input', (e)=>{
    if (e.data == null) {
        textoCPF = textoCPF.slice(0, -1)
    } else {
        textoCPF += e.data
    }
    
    let cpf = ''
    for (let i = 0; i < textoCPF.length; i++) {
        const n = textoCPF[i]
        switch (i) {
            case 3:
                cpf += `.${n}`
                break;
            case 6:
                cpf += `.${n}`
                break;
            case 6:
                cpf += `.${n}`
                break;
            case 9:
                cpf += `-${n}`
                break;
        
            default:
                cpf += n
                break;
        }
    }
    labelCPF.innerText = cpf
})

var numTEL = ''
const campoTEL = document.getElementById("campo-telefone")
const labelTEL = document.getElementById("label-tel")
campoTEL.addEventListener('input', (e)=>{
    if (e.data == null) {
        numTEL = numTEL.slice(0, -1)
    } else {
        numTEL += e.data
    }
    
    let NUM = ''
    for (let i = 0; i < numTEL.length; i++) {
        const n = numTEL[i]
        switch (i) {
            case 0:
                NUM += `(${n}`
                break;
            case 1:
                NUM += `${n}) `
                break;
            case 6:
                NUM += `-${n}`
                break;
        
            default:
                NUM += n
                break;
        }
    }
    labelTEL.innerText = NUM
})

// botão para mandar mensagem
const btnMSG = document.getElementById("b-env-msg")
btnMSG.addEventListener('click', (e)=>{
    alert("Mensagem enviada.")
})



const no = document.getElementById("no")
const ne = document.getElementById("ne")
const so = document.getElementById("so")
const se = document.getElementById("se")

let valorNO = "0"
no.addEventListener('input', (e)=>{
    if (e.data == null) {
        valorNO = valorNO.slice(0, -1)
    } else {
        valorNO += e.data
    }
})

let valorNE = "0"
ne.addEventListener('input', (e)=>{
    if (e.data == null) {
        valorNE = valorNE.slice(0, -1)
    } else {
        valorNE += e.data
    }
})

let valorSO = "0"
so.addEventListener('input', (e)=>{
    if (e.data == null) {
        valorSO = valorSO.slice(0, -1)
    } else {
        valorSO += e.data
    }
})

function calcRegraDe3(a, b, c) {
    const d = (b * c) / a
    return d
}

const calcular = document.getElementById("b-calcular")
const resultado = document.getElementById("se-label")

calcular.addEventListener('click', (e)=>{
    resultado.innerText = (calcRegraDe3(Number(valorNO), Number(valorSO), Number(valorNE)))
})