function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número') // se tiver vazio
    }else{
        let n = Number(num.value) // número que o usuário digitou
        let c = 1
        tab.innerHTML = '' // limpar a proxima rodada quando for pesquisar (limpa o select) e mostra minha nova pesquisa
        while(c<= 10){ 
            let item = document.createElement('option') //dentro do selection ter opções para clicar // posso tanto o for quando o while
            item.text = `${n} x ${c} = ${n*c}` // parte de dentro do meu option
            item.value = `tab${c}` // selecionar o tab 1 ,2,3,4 quando selecionar 
            tab.appendChild(item) // adcionar um elemento filho que seria o número
            c++
        }

    }
}

