function invertString(str: string): string {
    return str.split("").reverse().join("");
  }
  
  function julioCesarCipher(message: string, shift: number): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    const encryptedMessage = message
      .toUpperCase()
      .split("")
      .map((char) => {
        const index = alphabet.indexOf(char);
        return index >= 0 ? shiftedAlphabet[index] : char;
      })
      .join("");
  
    return encryptedMessage;
  }
  
  function encryptAndInvert(message: string, shift: number): string {
    const invertedMessage = invertString(message);
    const encryptedMessage = julioCesarCipher(invertedMessage, shift);
    return encryptedMessage;
  }
  
  const originalMessage = "WIKIPEDIA, LA ENCICLOPEDIA LIBRE";
  const shiftAmount = 6;
  const encodedMessage = encryptAndInvert(originalMessage, shiftAmount);
  
  console.log("Texto original:", originalMessage);
  console.log("Texto codificado:", encodedMessage);
  
  const decodedMessage = encryptAndInvert(encodedMessage, 26 - shiftAmount);
  
  console.log("Texto decodificado:", decodedMessage);
  