const above = (data) => {
  return data.filter(el => el.population > 100000)
}

const below = (data) => {
  return data.filter(el => el.population < 100000)
}

module.exports = {
  above,
  below
}