module.exports = function check(str, bracketsConfig) {
  // your solution
    let confStr = bracketsConfig.map(e => e.join());
    let stack = [];
    stack.push(str[0]);
    for (let i = 1; i < str.length; i++) {
        let check = `${stack[stack.length - 1]},${str[i]}`;
        if (!stack.length || confStr.indexOf(check) === -1) {
            stack.push(str[i]);
        } else {
            stack.pop();
        }
    }
    return !stack.length;
};
