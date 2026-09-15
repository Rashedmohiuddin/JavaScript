// function sayHello()
// {
//     console.log("hello world");
// }
// sayHello()


//functions


//example 1
// function greet()
// {
//     console.log("Welcome to Javascipt");
// }
// greet()

//example 2
// function showMessage()
// {
//     console.log("Learning functions is fun!")
// }
// showMessage();

//exmaple 3
// function introduction()
// {
//     console.log("My name is JavaScript")
//     console.log("I was created in 1995");
//     console.log("I run in browser")
// }
// introduction();

//exmaple 4
// function greetuser(name)
// {
// console.log("hello, "+name+"!");
// console.log(`hello ${name}!`)
// }
// greetuser("alice")
// greetuser('Bob')
// greetuser("John")


//example 5
// function sum(a,b)
// {
//     console.log(`Sum of ${a} and ${b} is equals to ${a+b} `);
// }
// sum(2,2)

//exmaple 6
// function Message(name,age)
// {
//     console.log(`My name is ${name} and My name is ${age} `)
// }
// Message("JOHN",22)



//return key word

//example 1
// function sum(a,b)
// {
//     return a+b;
// }
// let result=sum(10,10);
// console.log(result)

//example 2
// function multiply(a,b)
// {
//     return a*b;
// }
// let mul=multiply(10,10)
// console.log(mul)

//exampple 3
// function test()
// {
//     return 10;
//     console.log("this will never run");
//     return 20;
// }
// let value =test();
// console.log(value)

//example 4
// function getPrice()
// {
//     return 50;
// }
// let price =getPrice();
// let tax=price*0.1;
// let total=price+tax;
// console.log(total)

//example 5
// function getGreeting(name)
// {
//     return "Hello, "+name;
// }
// let message=getGreeting("Alice");
// console.log(message)


//understanding the scope


//example 1
// function showScore()
// {
//     let score=100;
//     console.log(score);
// }
// showScore();
// console.log(score)


// example 2
//function scope
// function func1()
// {
//  let x=10;
//  console.log(x);
// }
// function func2()
// {
//     let y=20;
//     console.log(y)
// }
// func1();
// func2();

//block scope with if statement

//exmaple 3
// if(true)
// {
//     let temp=10;
//     console.log(temp);
// }
// console.log(temp)

//exmaple 4
// for(let i=0;i<=10;i++)
// {   
//      console.log("hello",i);
// }
// console.log(i)

//example 5
// {
//     let secret="hidden";
//     console.log(secret)
// }
// console.log(secret)


//lexical scope

//example 1

// function outer()
// {
//     let x=10;
//     function inner()
//     {
//         console.log(x);
//     }
//     inner()
// }
// outer()

//example 2

// function func1()
// {
//  let a=10;

//     function func2()
//     {
//        let b=20;  
//        function func3()
//        {
//         console.log(a)
//         console.log(b)
//        }
//      func3()
//     }
//  func2()
// }
// func1()


//exmaple 3
// function greet(name)
// {
//     function createMessage()
//     {
//         return "hello, "+name;
//     }
// console.log(createMessage())
// }
// greet("john")

//function expression
//exmaple 1

// const multiply=function(a,b)
// {
//     return a*b;
// };
// console.log(multiply(2,2));

//exmaple 2
// const sayHi=function(name)
// {
//     console.log(`Hi my name is ${name}!`)
// }
// sayHi("John")


// arrow function

//example 1

// const square=(num)=>
// {
//     return num*num;
// }
// console.log(square(5))
// console.log(square(6))
// console.log(square(7))

// hiegher oreder function

//example 1

// function repeatTask(func,n)
// {
//     for(let i=0;i<n;i++);{
//         func();
//     }    
// }
// const alertUser=()=>
// {
//     console.log("Alert");
// };
// repeatTask(alertUser,3)

// exmaple 2
// function calculate(a,b,operation)
// {
//     return operation(a,b);
// }
// const add=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// console.log(calculate(5,5,add))
// console.log(calculate(5,5,mul))


//methods

// example 1

// let car=
// {
//     brand:"toyota",
//     start:function()
//     {
//         console.log("Engine start")
//     },
//     stop:function()
//     {
//         console.log("Engine off")
//     }
// };
// car.start()
// car.stop()

//example 2

// const mathTool={
//     add(a,b)
//     {
//           return a+b;
//     },
//     Subtract(a,b)
//     {
//         return a-b;
//     }
// };
// console.log(mathTool.add(2,2))
// console.log(mathTool.Subtract(6,3))


//example 3
// const person=
// {
//     name:"alice",
//     age:55,
//     greet()
//     {
//         console.log("Hello my name is "+this.name);
//     },
//     saAge(age)
//     {
//         console.log("My age is ",age)
//     }
// }
// person.greet()
// person.saAge(44)

// const account={
//     balance:100,
//     deposit(amount)
//     {
//         console.log("total balance",this.balance)
//         this.balance=this.balance+amount;
//         console.log(`"Deposited ${amount}"  New balance ${this.balance}`)
//     },
//     withdraw(amount)
//     {
//         console.log("total balance",this.balance)
//         this.balance=this.balance-amount;
//         console.log(`"withdraw ${amount}" New balance ${this.balance}`)
//     }
// }
// account.deposit(10)
// account.withdraw(5)

const a={
    upper(str)
    {
        return str.toUpperCase();
    },
    lower(str)
    {
        return str.toLowerCase();
    },
    trim(str)
    {
        return  str.trim();
    }
};
console.log(a.upper("hello"))
console.log(a.lower("HELLO"))
console.log(a.trim("hello     "))

  