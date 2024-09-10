// morse code for toki pona https://www.reddit.com/r/tokipona/comments/rl5kat/morse_code_for_toki_pona/
// morse code json: https://gist.github.com/mohayonao/094c71af14fe4791c5dd
const morse = {
    'tokipona': {
        'a':'.',
        'i':'..',
        'n':'-',
        'l':'.-',
        'o':'-.',
        'e':'...',
        'm':'..-',
        't':'.-.',
        'p':'-..',
        'k':'--',
        's':'.--',
        'u':'-.-',
        'w':'--.',
        'j':'..-.'
    },
    'international': {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-",
      }
}

const replacementMu = {
    //'mu'
}

function toMuuMuuMorse(string, type) {
    var code = morse[type];
    var string = string.toLowerCase();
    words = string.split(' ');
    newWords = [];
    console.log('words', words)
    for (word of words) {
        console.log('word', word);
        for (char of word) {
            console.log('char', char);
            if (char in code) {
                console.log('char in code');
                word = word.replace(char, `${code[char]} `);
                
            };
        }; 
        console.log('new word', word)
        newWords.push(word);
    };
    console.log('newWords', newWords);
    string = newWords.join('\n');
    string = string.replaceAll('.', 'mu').replaceAll('-', 'muu');
    string = string.replaceAll('muumuumuumuumuu', 'muuuuuuuuuuuuuu');
    string = string.replaceAll('muumuumuumuu', 'muuuuuuuuuuu');
    string = string.replaceAll('muumuumuu', 'muuuuuuuu');
    string = string.replaceAll('muumuu', 'muuuuu');
    return string;
}

function toSitelen(string, type) {
    var code = morse[type];
    string = string.replaceAll('muuuuuuuuuuuuuu','muumuumuumuumuu');
    string = string.replaceAll('muuuuuuuuuuu','muumuumuumuu');
    string = string.replaceAll('muuuuuuuu','muumuumuu');
    string = string.replaceAll('muuuuu','muumuu');
    string = string.replaceAll('muu','-').replaceAll('mu','.');
    words = string.split('\n');
    console.log('words',words);
    newWords = [];
    for (word of words) {
        console.log('word',word);
        letters = word.split(' ');
        console.log('letters',letters);
        newLetters = [];
        for (letter of letters) {
            console.log('letter',letter);
            for (const [key, value] of Object.entries(code)) {
                console.log(key,value);
                if (letter === value) {
                    newLetters.push(key);
                };
            };
        };
        console.log('newLetters',newLetters);
        newWord = newLetters.join('');
        console.log('newWord',newWord);
        newWords.push(newWord);
        console.log('newWords',newWords);
    };
    string = newWords.join(' ');
    console.log('string',string);
    return string;
}

function tawaTokiInli() {
    var langBtn = document.getElementById('language-button');
    langBtn.innerText = 'toki pona';
    langBtn.setAttribute('onclick','toTokiPona()');
    document.getElementById('header').innerText = 'muumuu morse code';
    document.getElementById('direction-legend').innerText = 'to morse or from morse?';
    document.getElementById('tawa-mu').nextSibling.textContent = "text to morse";
    document.getElementById('tawa-sitelen').nextSibling.textContent = "morse to text";
    document.getElementById('morse-type-legend').innerText = 'international morse code or toki pona morse code?';
    document.getElementById('international').nextSibling.textContent = 'international';
    document.getElementById('toki-pona').nextSibling.textContent = 'toki pona';
    document.getElementById('submit-button').innerText = 'submit';
    document.getElementById('header-response').innerText = 'response';
}

function toTokiPona() {
    var langBtn = document.getElementById('language-button');
    langBtn.innerText = 'toki inli';
    langBtn.setAttribute('onclick','tawaTokiInli()');
    document.getElementById('header').innerText = 'toki muumuu';
    document.getElementById('direction-legend').innerText = 'tawa mu anu tan mu?';
    document.getElementById('tawa-mu').nextSibling.textContent = 'sitelen tawa mu';
    document.getElementById('tawa-sitelen').nextSibling.textContent = "mu tawa sitelen";
    document.getElementById('morse-type-legend').innerText = 'mu pi ma ale anu mu pi toki pona?';
    document.getElementById('international').nextSibling.textContent = 'ma ale';
    document.getElementById('toki-pona').nextSibling.textContent = 'toki pona';
    document.getElementById('submit-button').innerText = 'o pana a!';
    document.getElementById('header-response').innerText = 'nimi ante:';
}

function oPana() {
    const direction = document.querySelector('input[name="direction"]:checked').value;
    const morseType = document.querySelector('input[name="morse-type"]:checked').value;
    const input = document.querySelector('textarea').value;
    var response = document.getElementById('response');
    console.log(direction, morseType, input);
    var output = ''
    if (direction==='tawa-mu') {
        output = toMuuMuuMorse(input, morseType);
    } else if (direction==='tawa-sitelen') {
        output = toSitelen(input, morseType);
    }
    response.innerText = output;
}