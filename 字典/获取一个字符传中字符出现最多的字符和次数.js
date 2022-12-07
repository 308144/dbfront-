function fun(s){
    let map =new Map()
let maxNum=0
let maxStr=''

    for (let i of s){
        map.set(i,(map.get(i)||0)+1)
    }
    for (let [key,value] of map){
        if(value>maxNum){
            maxStr=key
            maxNum=value
        }
    }
return [maxStr,maxNum]

}

console.log(fun('aaabbbccccsdddddddddddddd'));



// let p = 'aaaaaaabbbbbbccccdddddddddddddddddd'
// let person = p.split('')
// let key = ''
// let value = 0
// console.log(person);
// let nameObj = person.reduce((pre, cur) => {

//     if (cur in pre) {
//         pre[cur]++
//     }
//     else {
//         pre[cur] = 1
//     }

//     return pre
// }, {})
// function a(nameObj) {
//     for (i in nameObj) {
//         if (nameObj[i] > value) {
//             key = i
//             value = nameObj[i]
//         }
//     }
//     return [key, value]
// }
// console.log(a(nameObj))

