               //object 

const person={
    name:"Sridhar Raj P",
    dob:"09-12-1997",
    age:26,
 
    topics:"React JS",
    display:function(){
        console.log(`Hi i am ${this.name} Welcome to Credo Systemz - ${this.topics}`)
    },

    marks:{
        HTML:80,
        CSS:80,
        BS:80,
        JS:70,
        ReactJS:70,
    }
}
 
console.log(Object.keys(person))
console.log(Object.values(person))
 
person.display()
 
console.log(person)
console.log(person.marks.HTML)
 
 
console.log(person)
console.log(typeof(person))
 
// Accessing Object - 1. using dot notation, 2. using bracket notation
console.log(person.name)
 
console.log(person["age"])