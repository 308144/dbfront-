var nums = [2, 7, 11, 15]
var target = 9


function twoNum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i,j]
            }
        }
    }
}
// console.log(twoNum(nums, target)); 

function findIndex(nums,target){
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        num=target-nums[i]
        if(map.has(num)){
            return [map.get(num),i]
        }

        map.set(nums[i],i)
    }
}
console.log(findIndex(nums,target));