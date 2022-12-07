// 对象的key都是string类型，所以都会被转化为字符串
let a = {}
let b = {
    key: 'a'
}
let c = {
    key: 'c'
}
a[b] = '123'//a[[object:Object]:'123']
a[c] = '456'//a[[object:Object]:'456']

console.log(a);//{[object Object]: '456'}
console.log(a[c]);//456

let map = new Map()

map.set(b, '123')
map.set(c, '456')
console.log(map);//0 {Object => "123"}  1{Object => "456"}
console.log(map.get(b));//123
console.log(map.has(b));//true