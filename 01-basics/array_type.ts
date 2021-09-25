// 全部都是數字
let numbers = [1, 2, 3, 4, 5];

numbers[0] = 6
numbers[1] = '7'

numbers = [2, 4, 6]
numbers = ['2']

// 全部都是字串
let strings = ['hi', 'how are you', 'goodbye'];
strings[1] = 'goodbye';
strings[2] = false;

// 可以做到 union 的效果
let numbersAndStrings = [1, '456']


let objectArray1 = [
    { message: 'Hello'},
    { message: 'Hi'},
    { message: 'Goodbye'}
]

// 型別推論都是 union 的效果
let objectArray2 = [
    { message: 'Hello'},
    { message: 'Hi', revolt: true },
    { message: 'Goodbye'}
]

let objectArray3 = [
    { message: 'Hello'},
    { message: 12345 },
    { message: 'Goodbye'}
]


// 結論: 對 Array 而言，大部分情況下，型別推論，都會將所有可能列出來
// 但要切記為了避免出現 any，因此我們必須積極地給予型別

let emptyArray = []