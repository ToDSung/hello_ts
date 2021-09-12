// ts 在沒有給定型別的情況下，能夠自動辨識型別，這稱作型別推論(Type Inference
let myName = 'Maxwell'; // string
let age = 20; // number
let hasPet = false; // boolean
let nothing = undefined; // any
let nothingLiterally = null; // any

// 想將 age 改變行為就會跳錯誤
age = '20'

// 盡量避免使用 any 型別，幾乎是代表無法套用 ts 的好處

// 為了避免這樣子延遲性的賦值，所以我們應該要預設的就給予型別
let a
a = '123'

let absoluteNothing:undefined = undefined
let literalAbsoluteNothing:null = null

absoluteNothing = 123
literalAbsoluteNothing = 456

// 在未確定變數被正式丟入合法的值之前的這段空間，不能使用該變數。
// 所以這裡的 myString 被 ts 認定為 String，那就不能被 assign undefined 進去
let canBeNullableString:string
let myString = canBeNullableString;

canBeNullableString = '789';

// 當 ts 的程式碼有錯時，就沒辦法用 tsc 進行編譯動作