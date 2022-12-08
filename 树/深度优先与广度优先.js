const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [{
                val: 'f',
                children: [

                ]
            },
            {
                val: 'g',
                children: [

                ]
            }]
        },
    ]
}
const fun1=function(tree){
    console.log(tree.val +'aaa');
    tree.children.forEach(fun1)
}
fun1(tree)
const fun2=(tree)=>{
    const arr=[tree]
    while(arr.length>0){
        const o=arr.shift()
        console.log(o.val);
        o.children.forEach(item=>{
            arr.push(item)
        })
    }
}
fun2(tree)