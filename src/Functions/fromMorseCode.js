module.exports = function fromMorseCode(text) {
    if(!text) return new Error('[ 🔧 ] - Parameter <text> not defined!');
    const morseCode = {
      '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd',
      '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', 
      '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', 

      '--': 'm',    '-.': 'n',    '---': 'o',  '.--.': 'p',
      '--.-': 'q',  '.-.': 'r',   '...': 's',  '-': 't',
      '..-': 'u',   'v': 'v',  '.--': 'w',  '-..-': 'x',
      '-.--': 'y',  '--..': 'z',  '-----': '0','.----': '1',
      '..---': '2', '...--': '3', '....-': '4', '.....': '5',
      '-....': '6', '--...': '7', '---..': '8', '----.': '9',
      '/': ' ', '.-.-.-': '.','--..--': ',','..--..': '?',
      '-.-.--': '!','.-...': '&', '---...': ':', '-.-.-.': ';',
      '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
      '-.--.': '(', '-.--.-': ')','.--.-.': '@'
    };
    
    const words = text.trim().toLowerCase().split(' ');
    const morseWords = words.map(word => {
      const morseChars = word.split('').map(char => morseCode[char] || '');
      return morseChars.join(' ');
    });
    
    return morseWords.join(' / ');
  }
  