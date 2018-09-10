
const lightContrast = (array, obj, key) => {
  let index = -1
  array.forEach((item, i) => {
    if (item[key] === obj[key]) {
      index = i
    }
  })

  return index
}

export default {
  lightContrast
}
