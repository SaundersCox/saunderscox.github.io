let majorKeys = ['C', 'G', 'F', 'D', 'Bb', 'A', 'Eb', 'E', 'Ab', 'B', 'Db', 'Gb'];
let minorKeys = ['A', 'E', 'B', 'F#', 'C#', 'G#', 'Eb', 'Bb', 'F', 'C', 'G', 'D'];

/**
 * Return an array of 'notes' based on the key's major scale
 * @param {Key of which the scale begins} key 
 */
function getMajorScale(key) {
    switch(key) {
        case 'C':
            return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        case 'G':
            return ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
        case 'F':
            return ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
        case 'D':
            return ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
        case 'Bb':
            return ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
        case 'A':
            return ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
        case 'Eb':
            return ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
        case 'E':
            return ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'];
        case 'Ab':
            return ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']; 
        case 'B':
            return ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];
        case 'Db':
            return ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'];
        case 'Gb':
            return ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'];
        default:
            return 'Invalid key';
    }
}

/**
 * Return an array of 'notes' based on the key's minor scale
 * @param {Key of which the scale begins} key 
 */
function getMinorScale(key) {
    switch(key) {
        case 'A':
            return ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        case 'E':
            return ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
        case 'B':
            return ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'];
        case 'F#':
            return ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'];
        case 'C#':
            return ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'];
        case 'G#':
            return ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'];
        case 'Eb':
            return ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'];
        case 'Bb':
            return ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'];
        case 'F':
            return ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
        case 'C':
            return ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
        case 'G':
            return ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'];
        case 'D':
            return ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'];
        default:
            return 'Invalid key';
    }
}

/**
 * Returns a random integer 0..n
 * @param {# indices} n 
 */
const rand = (n) => {
    return Math.floor(Math.random() * n);
}

/**
 * Assigns a random key to static currMajor
 */
const getRandMajor = () => {
    this.currMajor = majorKeys[rand(majorKeys.length)];
}

/**
 * Assigns a random key to static currMinor
 */
const getRandMinor = () => {
    this.currMinor = minorKeys[rand(majorKeys.length)];
}

/**
 * Generate a random non-trivial interval for the user to guess corresponding to a given key
 */
const getRandInterval = () => {
    const intervals = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13];
    return intervals[rand(intervals.length)];
}

/**
 * Invoke to the user an interval question
 */
function intervalQuestion() {
    document.getElementById("check").innerHTML = '';
    this.isMajor = Math.floor(Math.random() * 2);
    this.randInterval = getRandInterval();

    if (this.isMajor) {
        getRandMajor();
        document.getElementById("answer").innerHTML = 'What is ' + randInterval + ' above ' + this.currMajor + ' major?';
    }
    else {
        getRandMinor();
        document.getElementById("answer").innerHTML = 'What is ' + randInterval + ' above ' + this.currMinor + ' minor?';
    }
    

}

/**
 * Check if the user input a correct answwer
 */
function intervalCheck() {
    document.getElementById("check").innerHTML = getMajorScale(currMajor)[(this.randInterval-1)%7];
    // document.getElementById("check").innerHTML = this.randInterval%8;
}

/**
 * Display the scale for the given key
 */
function scales() {
    enteredKey = document.getElementById("in").value;

    document.getElementById("scales").innerHTML = 
        'Major: ' + getMajorScale(enteredKey) + '<br>' + 
        'Minor: ' + getMinorScale(enteredKey) + '<br>'
        ;

}