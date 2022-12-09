var s='abbaca'


function A(s){
    let stack =[]
    for(let v of s){
        let k=stack.pop()
        if(k!=v){
            stack.push(k)
            stack.push(v)
        }

    }
    return stack.join('')
}
console.log(A(s));//ca