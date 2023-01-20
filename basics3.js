//array is a collection of elements 



var marks = [20,40,35,12,37,100]
SubMarks=marks.slice(2,5)
console.log(SubMarks)

marks[2]
console.log(marks[2]) // output will be 35 
marks[3]=14  // value 12 will be replaced with 14 now
console.log(marks) // output will be [20,40,35,14,37,100]
console.log(marks.length) // it will tell the length of the array 

marks.push(65) // it will add 65 in the end of the array list 
console.log(marks) // [20,40,35,14,37,100,65]
marks.pop() // [20,40,35,14,37,100] it will delete the last element 

marks.unshift(12) // this add the element in begining of array

console.log(marks)

marks.indexOf(100) //index of the element
console.log(marks.indexOf(100))

// 120 in the array is present or not

marks.includes(120)
console.log(marks.includes(120))
var sum = 0
for (let i=0; i<marks.length;i++)
{
    //console.log(marks[i])
    sum= sum + marks[i]
    console.log(sum)
}


let fruits= ["banana","mango","pomegrante","apple"]
fruits.sort()
console.log(fruits)

var scores1=[12,13,19,16,14]
console.log(scores1.sort())

console.log(scores1.sort((a,b)=>a-b))