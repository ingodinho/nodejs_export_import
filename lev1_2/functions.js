const firstElement = (array) => {
  return array[0];
}

const notLast = (array) => {
  const newArr = array.slice(0);
  newArr.pop();
  return newArr;
}

const onlyLast = (array) => {
  return [...array].pop();
}

const notFirst = (array) => {
  array.shift();
  return array;
}

const position = (array,pos) => {
  if(pos > array.length) {
    return array[array.length -1];
  }
  else if(pos < 1) {
    return array[array.length -1];
  }
  return array[pos - 1];
}

const remove = (array,el) => {
  return array.filter(ele => ele !== el)
}

const unique = (array) => {
  return [...new Set(array)];
}

const sum = (array) => {
  return array.reduce((a,b) => a + b)
}

const random = (a,b) => {
  return Math.floor(Math.random() * (a-b) + b);
}

const firstString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const allString = (string) => {
  return string.toUpperCase();
}

const compare = (str1,str2) => {
  return str1.charAt(str1.length - 1) === str2;
}

module.exports = {
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
}