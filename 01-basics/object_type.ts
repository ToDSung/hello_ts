let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
}

let someone = {
    knows: undefined,
    identity: null,
}

info.name = 'Martin'
info.age = 24
info.hasPet = true

// 隨意修改型別的寫法， ts 就會發現有問題
info.name = false
info.age = null
info.hasPet = 'Doggie With Mustache'

someone.knows = 'Nothing'
someone.identity = 'John Snow'

info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
}

someone = {
    knows: undefined,
    identity: null,
}

// 物件不管是多了 key 還是少了 key 都會被報錯

info = {
    name: 'Maxwell',
    age: 20,
}

someone = {
    knows: undefined,
    identity: null,
    loves: 'Ygritte',
}

info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
}

// 隨便新增屬性也會被報錯
info.job = 'Engineer'

let nestedObjects = {
    props: 'Hello',
    child: {
        prop1: 123,
        props2: false,
    }
}

let obj1 = {
    hello: 'Another world'
}

// 不會被報錯，能夠正常的變成有兩個屬性的物件
let obj2 = {
    ...obj1,
    goodbye: 'Cruel world'
}

let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
  goodbye: 'Cruel World'
});

let justAnObject: object = {
    hello: 'World'
}

// 就算 hello 這個 key 一樣是 String 也照樣報錯
justAnObject.hello = 'Max'

justAnObject = { goodbye: 'Cruel World'}

// 實際上只要是廣義的物件，都會被通過

justAnObject = 123

justAnObject = [1, 2, 3]
justAnObject = () => {}
justAnObject = new Object()
justAnObject = new String('123')
justAnObject = new Number(123)

justAnObject = Object
justAnObject = Array

// 通常在使用物件時，不太需要去註記變數是一個 object