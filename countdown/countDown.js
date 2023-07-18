const dia = document.getElementById('dia')
const hora = document.getElementById('Hora')
const hinuto = document.getElementById('Minuto')
const segundo = document.getElementById('Segundo')

const lançamento = "30 January 2023"

function countDown() {

    const dia = document.getElementById('dia')
    const hora = document.getElementById('hora')
    const minuto = document.getElementById('minuto')
    const segundo = document.getElementById('segundo')

    const lancamento = "30 January 2023"
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segtotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segtotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segtotal / 60 / 60) % 60;
    const finalSegundos = Math.floor(segtotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = finalMinutos
    segundo.innerHTML = finalSegundos
}


countDown();
setInterval(countDown, 100);
