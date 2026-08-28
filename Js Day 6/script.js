//objects
//example 1
// let student =
// {
//     name : "alice",
//     age : "22",
//     grade :"A",
// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);

//exmaple 2

// let product ={
//     title :"Laptop",
//     price:45000,
//     inStock  :true,
// }
// console.log(product);
// console.log(product.title);
// console.log(product.price);
// console.log(product.inStock);


//exmaple 3
// let locationdata=
// {
//     longitude:"28.704 N ",
//     latitude:"77.105 E",
//     city:"Delhi",
// };
// console.log(locationdata);


//accessing object properties

//example 1

// let student ={name :"alice",age:21,city:"seattle"};
// console.log(student.name)
// console.log(student.age)
// console.log(student.city)


//example 2
// console.log(student["city"])

//exmaple 3
// let person =
// {
//     "first name":"john",
//     "last name ":"doe",
// }
// console.log(person["first name"]);


//modifying objects


// exmaple 1
// let student =
// {
//     name :"abc",
//     age:22,
//     city:"hyderad",
// }
// student.name="alice"
// student.age=25;
// student.city="moscow";
// console.log(student.name="alice")
// console.log(student)

//example 2
// let student =
// {
//     name :"abc",
//     age:22,
//     city:"hyderad",
// }
// student.gender="female"
// console.log(student)

//exmple 3
//  let student =
// {
//     name :"abc",
//     age:22,
//     city:"hyderad",
// }
// delete student.city;
// console.log(student)


//nested objects

// let users=
// {
//     user1:
//     {
//         name:"alice",
//         age:25,
//         city:"moscow"
//     },
//     user2:
//     {
//         name :"elisa",
//         age :21,
//         city:"moscow",
//     }
// }
// console.log(users)
// console.log(users.user1.name)
// console.log(users.user2.name)

//exmaple 2
// let company =
// {
//     engineering:
//     {
//         employees : 50,
//         manager:"john",
//     },
//     sale:
//     {
//         employees:30,
//         manager:"sarah",
//     },
//     hr:{
//         employees:10,
//         manager:"mike",
//     },
// };
// console.log(company.engineering.manager);
// console.log(company.engineering.employees);

//exmaple 3
// let student=
// {
//     student1:
//     {
//         name :"melisa",
//         city:"st petersberg",
//     },
//     student2:
//     {
//         name :"john",
//         city: "moscow",
//     }
// }
// console.log(student)
// console.log(student.student1)
// console.log(student.student2)
// console.log(student.student1.name)
// console.log(student.student2.name)

//array of objects
// let product=[
//     {id:101,name:"laptop",price:45000},
//     {id:102,name:"mouse",price:45000},
//     {id:103,name:"keyboard",price:45000}
// ]
// console.log(product)
// console.log(product[0].name)
// console.log(product[0])
// console.log(product[1])
// console.log(product[2])


//math objects
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.abs(-24))
// console.log(Math.abs(23))
// console.log(Math.pow(2,2))
// console.log(Math.floor(5.3))
// console.log(Math.ceil(2.1))
// console.log(Math.round(5.6))

// let radius =5;
// let circumfrence =2 *Math.PI*radius;
// console.log(circumfrence);
// let area=Math.PI*Math.pow(radius,2);
// console.log(area);

//random number  between 0-1
// console.log(Math.random()) 
// console.log(Math.random()) 
// console.log(Math.random())


// console.log(Math.random()*1000);
// console.log(Math.random()*100);
// console.log(Math.random()*10);

// console.log(Math.random()*5)
// console.log(Math.random()*10)
// console.log(Math.random()*20)
// console.log(Math.random()*30)


//genrating random integers

// let random =Math.floor(Math.random()*10)+1
// console.log(random)

//random number formmla
// let num =Math.floor(Math.random()*(10-1+1))+1
// console.log(num)






