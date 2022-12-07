const arr=[1,2,3,4,4,5,2,1]
const arr2=[1,2,8,8,9,70]

function intersection(arr,arr2){
    let set=new Set(arr2)

return [...new Set(arr)].filter(item=>set.has(item))

}
console.log(intersection(arr,arr2));