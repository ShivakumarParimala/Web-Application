
//  1. The school has a list of student grades, stored in an array. 
//  Your task is to create a function that takes in an array of grades and returns the average grade.
// 	INPUT: [10, 20, 30, 40]
// 	OUTPUT: 25


// const num =[ 10,20,30,40];
// const sum = num.reduce((acc,num) =>acc+num,0);
// const average = sum/num.length;
// console.log(average);

// -----------------------------------------------

// 4.Write a program to find the sentence which starts with ‘The’.
// INPUT: [“The Taj Mahal”, “Book”, “the Road Ahead”, “My name is Peter”]
// OUTPUT: [“The Taj Mahal”, “the Road Ahead”]


// const sen= ["The taj mahal","book","the road ahead","my name is peter"];
// const results= sen.filter((sen)=>{
//     if (sen.startsWith("The")){
//         return sen;
//     }
//     else if(sen.startsWith("the")) {
//         return sen;
//     }
// });
// console.log(results)

// ----------------------------------------------

// 5.Write a program to find the sentence which ends with “ing”
// 	INPUT: [“Batting”, “Book”, “Swimming”, “Dance”]
// 	OUTPUT: [“Batting”, “Swimming”]

// const sen=["Batting","Book","Swimmming","Dance"]
// const results= sen.filter((sen)=>{
//     if (sen.endsWith("ing")){
//         return sen;
//     }
//     else if(sen.endsWith("ing")) {
//         return sen;
//     }
// });
// console.log(results)

// -----------------------------------------------

// 2.Given an array of integers, return an array of the elements in even indices (0th, 2nd, 4th, etc.).
// INPUT: [1,2,3,4,5]
// OUTPUT: [1,3,5]


// const arr=[1,2,3,4,5];
// const result=arr.filter((element, index)=>{
//     return index % 2===0;
// });
// console.log(result);

// --------------------------------------------------

// 3.Given, the array of objects:
// const library = [
// {
// author: "Bill Gates",
// title: "The Road Ahead",
// readingStatus: true,
// },
// {
// author: "Steve Jobs",
// title: "Walter Isaacson",
// readingStatus: true,
// },
// {
// author: "Suzanne Collins",
// title: "Mockingjay: The Final Book of The Hunger Games",
// readingStatus: false,
//  },
// ];
//    Write a JavaScript function called numberOfBooksRead that returns the number of books 
//    that have been read from the given object named library.(HINT: Use Reduce)



//   const library = [
//      {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//     },
//     {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//     },
//     {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//     },
//     ];


//     function numberOfBooksRead(library){
// return library.reduce((acc, book)=> {
// if (book.readingStatus === true) {
//     acc++;
// }
//    return acc;
//  }, 0); 
//     }
//     console.log(numberOfBooksRead(library));
