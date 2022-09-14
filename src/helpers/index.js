export const getString = value => {
  if (!Array.isArray(value)) return value
     
  let finalWord = ''
  value.map(part => finalWord = finalWord.concat(`${part} - `))
    
  return finalWord.substr(0, finalWord.length - 3)
}
