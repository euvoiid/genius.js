module.exports = function converterTemperatura(temperatura, escalaOrigem, escalaDestino) {
    let resultado = 0;
    if (escalaOrigem === 'C' && escalaDestino === 'F') {
      resultado = (temperatura * 9/5) + 32;
    } else if (escalaOrigem === 'F' && escalaDestino === 'C') {
      resultado = (temperatura - 32) * 5/9;
    } else {
      resultado = temperatura;
    }
    return resultado;
  }