class Person 
{

    age=25

    get location()
    {
        return "canada"
    }

//constructor is a method which execute by default when you create a object of the class
    constructor (firstName , lastName)
{
   this.firstName = firstName
   this.lastName  = lastName
}

fullname()

{
    console.log(this.firstName+this.lastName)
}
}


let person  =new Person ("tim", "jospeh")
console.log(person.age)
console.log(person.location)
console.log (person.fullname())





