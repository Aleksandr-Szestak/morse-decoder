const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


// --------------------------------------------------------
function decode(expr) {
    let i,j;
    let symb1, symb2, symb3;
    let morzeStr, decodeS;
    let rez = '';
    
    for(i=0;i<expr.length;i+=10){
        symb1 = expr.slice(i,i+10);

        if (symb1 === '**********'){
            decodeS = ' ';
        }
        else{
            morzeStr = '';
            for(j=0;j<10;j+=2){
                symb2 = symb1.slice(j,j+2);
                //console.log(symb2);
                if (symb2 === '11'){
                    symb3 = '-';
                }
                else if (symb2 === '10'){
                    symb3 = '.'
                }
                else{
                    symb3 = '';
                }
                morzeStr += symb3;
            }
    
            for (let key in MORSE_TABLE){
                if (key === morzeStr){
                    decodeS = MORSE_TABLE[key];
                    break;
                }
            }      
        }

        rez += decodeS;
    }

    return rez;
}

module.exports = {
    decode
}
