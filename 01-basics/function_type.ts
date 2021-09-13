let aSimpleFunction = function() { console.log('Hi!'); };

// 無法辨識輸入的參數型別
let addition = function (num1, num2) {
    return num1 + num2;
};

// 大部分的情況下，只要定義任何函式，
// TypeScript 通常會無條件推論函式內的參數（Parameters）為 any 型別，
// 這種現象我們稱之為 Implicit Any。

const additionCorrectly = function (num1: number, num2: number) {
    return num1 + num2;
};

let shouldBeString: String = additionCorrectly(123, 456)

// 遇到函式是回傳 any 型別的值，我們應該要主動標註型別
JSON.parse("{ a: hello }")

let doesItWork1 = () => undefined;
let doesItWork2 = (): undefined => undefined;
let doesItWork3 = (): undefined => {};
let doesItWork4 = (): void => {};