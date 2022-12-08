const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
}

// 先序遍历  根左右  //[1245367]
function first(tree) {
    let arr = []
    var fn = function (node) {
        if (node) {
            // 获取数值
            arr.push(node.val)
            // 遍历左子树
            fn(node.left)
            // 遍历右子树
            fn(node.right)
        }
    }
    fn(tree)
    return arr
}

console.log(first(tree));


function second(tree) {
    const arr = []
    var fn2 = function (node) {
        if (!node) return
        fn2(node.left)
        arr.push(node.val)
        fn2(node.right)

    }
    fn2(tree)
    return arr
}
console.log(second(tree));

function third(tree) {
    const arr = []
    var fn3 = function (node) {
        if (!node) return
        fn3(node.left)
        fn3(node.right)
        arr.push(node.val)
    }
    fn3(tree)
    return arr
}
console.log(third(tree));



