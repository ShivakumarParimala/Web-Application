 
  // 1st.b

//  const arr=[
//     {"id":1,"start":0,"duration":117,"slide":4,"view":100},
//      {"id":2,"start":1,"duration":12,"slide":1,"view":50},
//      {"id":3,"start":3,"duration":41,"slide":2,"view":20},
//      {"id":4,"start":5,"duration":29,"slide":3,"view":70},
//      {"id":5,"start":7,"duration":123,"slide":3,"view":88},
//      {"id":6,"start":4,"duration":417,"slide":2,"view":33},
//      {"id":7,"start":1,"duration":12,"slide":1,"view":56},
//      {"id":8,"start":9,"duratio":67,"slide":2,"view":33},
//  ]

// 1
//  const newArr = arr.filter(item=>item.duration>=12 && item.duration<=67);
// console.log(newArr);


//2
// const a=arr.filter(item=>item.duration>=12&& 
//   item.duration<=67);
//   console.log(a);


// 1st.a

// const arr =[
//     {"id":1,"start":0,"duration":117,"slide":4,"view":100},
//     {"id":2,"start":1,"duration":12,"slide":1,"view":50},
//     {"id":3,"start":3,"duration":41,"slide":2,"view":20},
//     {"id":4,"start":5,"duration":29,"slide":3,"view":70},
//     {"id":5,"start":7,"duration":123,"slide":3,"view":88},
//     {"id":6,"start":4,"duration":417,"slide":2,"view":33},
//     {"id":7,"start":1,"duration":12,"slide":1,"view":56},
//     {"id":8,"start":9,"duratio":67,"slide":2,"view":33},
// ];

// 1
// const Array=arr.filter(item=>item.start<=5);
//  console.log (Array);
 
//  2
// const a =arr.filter(item=>
//   item.start<=5);
//   console.log(a);



// -----------------------------------------------------------------------------------------------------------------------------

// 2nd.a

// const obj={
//     "Actors":[
//     {
//         "name": "Tom Cruise",
//         "age": 56,
//         "Born At": "Syracuse, NY",
//         "Birthadte": "July 3, 1962",
//         "photo":"http://jsonformatter.org/img/tom-sruise.jpg"
//     },
//     {
//      "name": "Robert Downey Jr.",
//       "age": 53,
//       "Born At": "New York City, NY",
//       "Birthadte": "April 4, 1965",
//      "photo":"http://jsonformatter.org/img/Robert-Downey-Jr.jpg"
//     }
//     ]
// }
 
// // 1.
// const arr =obj.Actors.map((val)=> {
//   let s={name:val.name,photo:val.photo}
//   return s
// })
// console.log(arr)

//2.
//const arr =obj.Actors.map(({name,photo})=>{
  //   return{name,photo}
  // });
  // console.log(arr)

// --------------------------------------------------------------------------------------------------------------------

// 3rd.a 

// const users=[
//     { name: 'Nicole', age:31},
//     { name: 'Chris', age:33},
//     { name: 'yaatree', age:2},
//     {name:'Sanne', age:29},
// ];

// const H = users.reduce((acc, curr)=>{
// if(curr.age>acc){
//   acc=curr.age  
//   }
//   return acc
//   });

//   console.log(H)





// -------------------------------------------------------------------------------------------------------------------

// 4th.a

// const staffsDetails =[
// { name:"Jam josh", age: 44, Salary: 4000, currency: "USD"},
// { name:"Justina Kap", age: 34, Salary: 3000, currency: "USD"},
// { name:"Chris Colt", age: 37, Salary: 3700, currency: "USD"},
// { name:"Jane Doe", age: 24, Salary: 4200, currency: "USD"}
// ]

//  const newArray=staffsDetails.forEach((val,i)=>{
// let newobj={id:i+1,...val};
// console.log(newobj)
//  });

