const { names, numbers } = require('./data');
const {
	firstElement,
	notLast,
	onlyLast,
	notFirst,
	position,
  remove,
  unique,
  sum,
  random,
  firstString,
  allString,
  compare
} = require('./functions');

// console.log(firstElement(names));
// console.log(firstElement(numbers));

// console.log(notLast(names));
// console.log(notLast(numbers));

// console.log(onlyLast(names));
// console.log(onlyLast(numbers));

// console.log(notFirst(names));
// console.log(notFirst(numbers));

// console.log(position(names,55));
// console.log(position(numbers,69));

// console.log(remove(names,'Christian'));
// console.log(remove(numbers,55));

console.log(unique(names));
console.log(unique(numbers));

// console.log(sum(numbers));

// console.log(random(6,15));
// console.log(firstString('jonas'));
// console.log(allString('testet'));

// console.log(compare('jonas','f'));