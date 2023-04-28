module.exports = function getDataAtual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds();
    const dataHoraAtual = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    return dataHoraAtual;
}