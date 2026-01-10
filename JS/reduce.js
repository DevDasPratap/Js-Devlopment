const arr = [1,2,3,4,5]
const result = arr.reduce((prevValue, currValue)=>{
  return [currValue, ...prevValue]
}, [])
console.log(result)