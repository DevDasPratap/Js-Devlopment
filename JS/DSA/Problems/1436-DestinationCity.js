// 1436. Destination City

const paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

const destCity = function(paths) {
    let destination = ''
    
    paths.forEach((path)=>{
      const start = path[0]
      const end = path[1]
      
      if (start[0] !== end[1]) {
        destination = path[1]
      }
    })
    
    return destination
};

console.log(destCity(paths))