/* Sistema de Gol */
function team(team) {
    if (arguments[0] == 1) {
        const scoreTxt1 = document.getElementById('Tm1')
        let n1 = Number(scoreTxt1.innerText)
        scoreTxt1.innerText = n1 += 1
    }

    if (arguments[0] == 2) {
        const scoreTxt2 = document.getElementById('Tm2')
        let n2 = Number(scoreTxt2.innerText)
        scoreTxt2.innerText = n2 += 1
    }
}

/* Função de Reset */
function Reset() {
    document.getElementById('Tm1').innerText = "0"
    document.getElementById('Tm2').innerText = "0"
}

/* Animação de Pause e Play */