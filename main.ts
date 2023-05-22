let mymessage="Hello";
console.log(mymessage);
//By adding this ts treats this as module rather than a folder.tsc.cmd 
//to automatically run whenever file changes we run the cmd tsc.cmd main --watch
////let and const for variable declarations
//Ts has only global scope and function scope
export{} 
//let declarations can be there without assigning a value but constant declarations cannot be declared like that.
let x=10;
// let x=30 generates error
let y;
y=20;
//Value for the constant can be assigned only once
const c=10;
//If you feel that a varianle cannot be reassigned the value in its life time then go with constant declaration if not go with let declarations such that you have a chnce to reassign the value.

////Variable Types
//boolean
//string
//number
let isbeginner:boolean=true;
let num:number=1000;
let name:string="Ramya";
let sentence:string= `My name is ${name}. I am a beginner in typescript`;
console.log(sentence);
//Ts helps you to do static type checking it will check the datatype of the variable before reassigning the value
//null and undefined are subtypes of all other types.
let n:null=null;
let u:undefined=undefined;
let list1:number[]=[1,2,3];
let list2:string[]=["a","b","c"];
let lis3:Array<number>=[1,3,4];
let list4:Array<string>=["a","b","c"];
let list5:(number|string)[]=["hello",1,2,"hi"];
//A tuple having a string and the number 
//The number and order of parameters has to be same as declared 
//Fixed number of values with different types tuples can be used
let mytuple:[string,number]=["hi",1]
//enum type for giving friendly names to set of numeric values.
//values for enum type starts at 1 we can also assign default values if needed
enum color{
    red=10,green,blue
}
console.log(color.green)
// If you are unsure about the type of the variable then use any type
//or If you are expecting value from the third party or dynamically from the user then go for the dynamic type.
//It encompasses the value of any type it doesn't force you to do type checking
let myvariable:any=10;
myvariable="Ramya";
myvariable=true;
myvariable=20.5;
//myvariable.toUpperCase();
console.log(myvariable);
//Type script 3.0 introduced new type called unknown any value can be assigned 
//however u cannot access the all type of methods as accessed for any type.
let myvariables:unknown=20;
myvariables="and";
//myvariables.toUpperCase(); generates error as the methods are not accessible for undefined top 

let a;
a=10;
a="hello";
let b=10;
//b=true generates error as a is assigned previously number
//Even we didn't specify the type the typescrpt type inference and found the datatype of the variable b.
// type script inferences the type in type inference not all the time.
// Ability to define different types for the same variable is as follows
let myexample:number| boolean;
myexample=1;
myexample=true;
//For the above code of text we can also declare as any type instead of number,boolean but the difference arises is that if we declare it as anytype then
//more options available for the type of variable but th emethods are not accessible for any type
let myexamples:any;
myexample=1;
myexamples="Ramya";//mhyexamples. no options will be available 
////Functions
////In typescript evry parameter is a required parameter . If you want a parameter to be optional then add ? at the end of the parameter
//Optional parameter should follow the required parameter but not vice versa.

function addNums(num1=10,num2?:number):number{
    if(num2){
    return num1+num2
    }
    else
    {
        return num1
    }
}
console.log(addNums(5,8));
//console.log(addNums("hi",1)); generates error 
//default parameters are the parameters with a set value instead of undefined.
////In tpescript it is possible to define an object as a type

function myfunction(person:{firstname:string,lastname:string})
{
    console.log(`${person.firstname} ${person.lastname}`);
}
let p=
{
    firstname:"Ramya",
    lastname:"adabala"
}
myfunction(p);
// now we have only few properties such as firstname and lastname so thatr we have declared it in the function definjtion . But it is noyt the case when we have mulytiple parameters to work with such cases we pass intewrface.
interface persons
{
   firstname:string,
   lastname:string,
   city:string,
   DOB:string,
   Education:string
}
function mydetails(student:persons)
{
    console.log(`Details passed are ${student.firstname} ${student.lastname} from city ${student.city}`)
}
let details=
{
   firstname:"Ramya",
   lastname:"A",
   city:"Hyderabad",
   DOB:"8thJune",
   Education:"UG"
}
console.log(mydetails(details));
//Classes and Access modifiers
class myclass
{ 
    
    constructor(protected name:string,
       private  class1:number,
        public grade:string)
        {
          this.name=name;
          this.grade=grade;
          this.class1=class1;
        }
    public myclassmethod()
    {
      console.log(`Here registered student with name ${this.name} and class ${this.class1} with grade ${this.grade}`)
    }


}
let myobj=new myclass("Ramya",10,"A");
myobj.myclassmethod();
//console.log(myobj.name);
//// Inheritance
//using Inheritance a class can extend other classes and use their properties and methods from their super classes without redeclaring them hence code reusability.
//here we can use myclass2 object to call class1 and class2 properties.
class myclass2 extends myclass{
    constructor(name1:string,grade1:number,class2:string)
    {
        super(name1,grade1,class2);
    }
    public myclassmethod2()
    {
        console.log(`Iam method2 from class2 ${name}`)
    }
}
let obj2=new myclass2("Harini",15,"O");
//console.log(obj2.name);
obj2.myclassmethod();
obj2.myclassmethod2();
//Access specifiers 
//private -acessible only inside the main class
//protected -accessible inside the main class,derived class and subclass
//public accessible anywhere
