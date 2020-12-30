const stack = [];

// 入栈
stack.push(1);
stack.push(2);

// 出栈
const item1 = stack.pop();
const item2 = stack.pop();
console.log(item1, item2);

let arr = [1, 2, 3];
let arr_reverse = [];
const len = arr.length;

// for (let i = len; i > 0; i--) {
//   arr_reverse[len-i] = arr[i-1];
// }

let i = 0;
while (i < len) {
  arr_reverse.push(arr.pop());
  i++;
}

console.log(arr_reverse);