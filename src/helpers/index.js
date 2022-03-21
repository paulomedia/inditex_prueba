export const getString = value => {
    if(!Array.isArray(value)) return value;
     
    let finalWord = '';
    for(let i = 0; i<value.length; ++i) {
      finalWord += value[i]+' - ';
    }
    
    return finalWord.substr(0, finalWord.length - 3);
}