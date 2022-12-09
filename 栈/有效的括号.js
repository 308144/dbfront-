function isVaild(s) {
    if (s.length % 2) return false
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const start = s[i]
        if (start === '(' || start === '{' || start === '[') {
            stack.push()
        } else {
            const end = stack[stack.length - 1]
            if ((end === '(' && start === ')') || (end === '{' && start === '}') ||( end === '[' && start === ']')) {
                stack.pop()
            } else {
                return false
            }
        }
    }

        return stack.length === 0


}

console.log(isVaild('()(}(]')); 
// 给定一个字符串判断它是否事有效的字符例如 s='()()(}(]'