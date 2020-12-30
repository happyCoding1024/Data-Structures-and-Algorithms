// 20 有效的括号
function isValid(s: string): boolean {
  // 声明栈
  const stack = [];
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }
    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      const stackTop = stack.pop();
      if ( (s[i] === ')' && stackTop !== '(') ||
           (s[i] === ']' && stackTop !== '[') ||
           (s[i] === '}' && stackTop !== '{')
          ) {
            return false;
      } 
    }
  }   
  return stack.length === 0;
};

isValid('()');