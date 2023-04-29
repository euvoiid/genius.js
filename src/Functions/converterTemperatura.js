module.exports = function converterTemperatura(temperatura, escalaOrigem, escalaDestino) {
  if(!temperatura) return new Error('[ 🔧 ] - Parameter <temperatura> not defined!');
  if(!escalaOrigem) return new Error('[ 🔧 ] - Parameter <escalaOrigem> not defined!');
  if(!escalaDestino) return new Error('[ 🔧 ] - Parameter <escalaDestino> not defined!');
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