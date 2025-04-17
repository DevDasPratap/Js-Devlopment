function insertAtEnd(array, element) {
    array[array.length] = element
    return array
}

console.log(insertAtEnd([7,8,9,10], 10.5))


// function removeDuplicate(str){
//     let unique = []
//     for(let i=0; i<str.length; i++){
//         if(!unique.includes(str[i])){
//             unique.push(str[i])
//         }
//     }
//     return unique.join('')
// }

// console.log(removeDuplicate('aabbcc'))


async function searchProduct(search) {
    try {
      const url = `https://dummyjson.com/products/search?q=${search}`;
      const result = await fetch(url);
      console.log('result', result);
      if (!result.ok) {
        console.log('Result not found');
        return;
      }
      const data = await result.json();
      console.log('Data', data);
    } catch (error) {
      console.error('Error', error);
    }
  }
  
  // (async () => {
  //   const getSearchResult = await searchProduct('phone');
  //   console.log(getSearchResult);
  // })();