function doble(nums){
    let map=new Map()
    for(let x of nums){
        if(map.has(x)){
            return true
        }
        map.set(x,1)
    }
    return false
}
console.log(doble([123,123,33,1112,2,4]));