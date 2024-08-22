document.addEventListener('DOMContentLoaded', () => {
    const campoSenha = document.querySelector(".campo-senha")
    const tamanhoSenha = document.querySelector("#tamanho-senha")
    const maiusculas = document.querySelector("#maiusculas") 
    const minusculas = document.querySelector("#minusculas")
    const numeros = document.querySelector("#numeros")
    const simbol = document.querySelector("#simbolos")

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const maiuscula = () => String.fromCharCode(rand(65, 90))
    const minuscula = () => String.fromCharCode(rand(97, 122))
    const numero = () =>String.fromCharCode(rand(48, 57))
    const simbolos = `!@#$%¨&*()_-~^{}[]?/|\`;:`
    const simbolo = () => simbolos.charAt(rand(0, simbolos.length))

    function geraSenha(qtd, mai, min, num, sim) {
        const senha = []
        qtd = Number(qtd)
        for(let i = 0; i < qtd; i++) {
            mai && senha.push(maiuscula())
            min && senha.push(minuscula())
            num && senha.push(numero())
            sim && senha.push(simbolo())
        }
        
        return senha.join('').slice(0, qtd)
    }

    document.querySelector("#gera-senha").addEventListener('click', () => {
        if(tamanhoSenha.value < 5 || tamanhoSenha.value > 100) {
            return campoSenha.innerHTML = "A senha precisa ter entre 1 e 100 carcteres!"
        } 

        if(!(maiusculas.checked ||
            minusculas.checked ||
            numeros.checked ||
            simbol.checked)) {
            return campoSenha.innerHTML = "Selecione pelo menos um campo!"
        } 

        const senha1 = geraSenha(
            tamanhoSenha.value,
            maiusculas.checked,
            minusculas.checked,
            numeros.checked,
            simbol.checked
        )

        

        campoSenha.innerHTML = senha1

    })

    document.querySelector("#copia-senha").addEventListener('click',() => {
        const copiaSenha = campoSenha.innerText

        if(copiaSenha === "A senha precisa ter entre 5 e 100 caracteres!" || copiaSenha === "Selecione pelo menos um campo!") return copiaSenha.innerHTML = ''
        
        navigator.clipboard.writeText(copiaSenha)
    })
})
