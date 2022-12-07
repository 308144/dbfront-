const arr = [1, 2, 3, 4, 4, 3, 3, 3, 3]
const arr2 = [1, 1, 2, 3, 3, 3]

const a = function (arr) {
    const arrs = arr.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc
    }, {})
    return arrs
}
// console.log(Object.values(a(arr2)));
// console.log(Object.values(a(arr2)).length);
// console.log(new Set(Object.values(a(arr2))));
// console.log(new Set(Object.values(a(arr2))).size);

  const b= Object.values(a(arr2))
    const c=new Set(b)
    console.log(b.length===c.size);
    
