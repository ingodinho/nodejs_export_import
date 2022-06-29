const sort = (array) => {
  return array.sort((a,b) => {
    if(a > b) {
      return 1
    } 
    else return -1;
  })
}

module.exports = {sort}