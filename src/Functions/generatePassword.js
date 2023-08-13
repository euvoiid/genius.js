module.exports = function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
  if (!length) return new Error('[ 🔧 ] - Parameter <length> not defined!');
  
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*';
    
  let chars = '';
  if (useUppercase) chars += uppercaseChars;
  if (useLowercase) chars += lowercaseChars;
  if (useNumbers) chars += numberChars;
  if (useSymbols) chars += symbolChars;
  
  if (chars.length === 0) {
    return new Error('[ ⚠️ ] - Você deve selecionar pelo menos um tipo de caractere. (useUppercase, useLowercase, useNumbers, useSymbols)\n\n› Para usar coloque true.\nExemplo: generatePassword(10, true, true, true, true)\n');
  }
    
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
    
  return password;
}