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
    '*': ' '
};

function decode(expr) {
    let exprArray = []
    for (let i = 0; i < expr.length; i += 10) {
	    exprArray.push(expr.slice(i, i + 10))
    }
    let newArr = exprArray.map(e => e.slice(e.indexOf('1')))
    let morseArr = newArr.map(e => {
        let newElem = ''
        for (let i = 0; i < e.length; i += 2) {
            newElem += decodeBinaryToMorse(e.slice(i, i + 2))
        }
        return newElem
    })

    let result = ''
    for (let elem of morseArr) {
        result += MORSE_TABLE[elem]
    }

    function decodeBinaryToMorse(expr) {
        if (expr === '*') return '*'
        return expr === '10' ? '.' : '-'
    }

    return result 
}

module.exports = {
    decode
}