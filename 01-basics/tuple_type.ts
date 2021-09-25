// tuple 必須積極註解型別
// tuple 中的值是有序的
const BMwMotor:[string, string, string, Date] = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)]
const ToyotaRV:[string, string, string, Date] = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)]

// 可以使用 type 進行型別宣告
type Vehicle = [string, string, string, Date]
const newBMwMotor:Vehicle = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)]
const newToyotaRV:Vehicle = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)]

// tuple vs array

// 長度要一模一樣
// 格式也要完全吻合
let v1: Vehicle = ['Honda', 'motorcycle', 'red']
let v2: Vehicle = ['Tesla', 'electric', 'sapphire', '2019-08-14']