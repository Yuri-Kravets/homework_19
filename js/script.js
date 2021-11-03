// Task 1
let arr = ['a','b','c','d'];

alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);

// Task 2
let arr = [2,5,3,9];

let result = ((arr[0]*arr[1])+(arr[2]*arr[3]));
console.log(result);

// Task 3

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

  alert(arr[1][0]);

// Task 4
let obj = {js:['jQuery', 'Angular'], php:'hello', css:'world'};
  alert(obj.js[0]);
  
 // Task 5
let arr = [];
let str = '';
	for (let i = 0; i < 10; i++) {
		str += 'x';
		arr.push(str);
}
console.log(arr);
 
// task 6
let arr = [];
let str;
for (let i = 1; i < 10; i++) {
	str = '';
	for (let a = 1; a <= i; a++) {
		str += i;
	}
	arr.push(str);
}
console.log(arr);

// Task 7 
function arrayFill(value, lenght) {
  let arr =  Array(lenght).fill(value);
  console.log(arr);
}
arrayFill('x', 8);

// Task 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
		if (sum > 10) {
			break;
		}
		console.log(i+1);
	}
// Task 9
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverse(a) {
	let b = [];
	for (let i = a.length-1; i >= 0; i--) {
	b.push(a[i]);
	}
	return b;
	}
	console.log(reverse(array));
	
// Task 10
let arr = [[1, 2, 3], [4, 5], [6]];
let arr2 = arr.flat();
let result = arr2.reduce(function(sum, elem) {
		return sum + elem;
	}, 0);
	
	console.log(result);
	
// Task 11
let arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function sum(arr) {
	let b = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			for (let k = 0; k < arr[i][j].length; k++) {
				b += arr[i][j][k];
			}
		}
	}
	return b;
}
	console.log(sum(arr));
