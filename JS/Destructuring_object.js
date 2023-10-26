const obj = {
    name:'Pratap',
    profile: 'Software Developer',
    address:{
        country: 'Bharat',
        city: 'Kolkata',
        pin: 721602,
    }
}

const {name, profile:p, address:{city, pin:zip}} = obj

console.log(name)
console.log(p)
console.log(city)
console.log(zip)