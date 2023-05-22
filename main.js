"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mymessage = "Hello";
console.log(mymessage);
//let declarations can be there without assigning a value but constant declarations cannot be declared like that.
var x = 10;
// let x=30 generates error
var y;
y = 20;
//Value for the constant can be assigned only once
var c = 10;
//If you feel that a varianle cannot be reassigned the value in its life time then go with constant declaration if not go with let declarations such that you have a chnce to reassign the value.
////Variable Types
//boolean
//string
//number
var isbeginner = true;
var num = 1000;
var name = "Ramya";
var sentence = "My name is ".concat(name, ". I am a beginner in typescript");
console.log(sentence);
//Ts helps you to do static type checking it will check the datatype of the variable before reassigning the value
//null and undefined are subtypes of all other types.
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = ["a", "b", "c"];
var lis3 = [1, 3, 4];
var list4 = ["a", "b", "c"];
var list5 = ["hello", 1, 2, "hi"];
//A tuple having a string and the number 
//The number and order of parameters has to be same as declared 
//Fixed number of values with different types tuples can be used
var mytuple = ["hi", 1];
//enum type for giving friendly names to set of numeric values.
//values for enum type starts at 1 we can also assign default values if needed
var color;
(function (color) {
    color[color["red"] = 10] = "red";
    color[color["green"] = 11] = "green";
    color[color["blue"] = 12] = "blue";
})(color || (color = {}));
console.log(color.green);
// If you are unsure about the type of the variable then use any type
//or If you are expecting value from the third party or dynamically from the user then go for the dynamic type.
//It encompasses the value of any type it doesn't force you to do type checking
var myvariable = 10;
myvariable = "Ramya";
myvariable = true;
myvariable = 20.5;
//myvariable.toUpperCase();
console.log(myvariable);
//Type script 3.0 introduced new type called unknown any value can be assigned 
//however u cannot access the all type of methods as accessed for any type.
var myvariables = 20;
myvariables = "and";
//myvariables.toUpperCase(); generates error as the methods are not accessible for undefined top 
var a;
a = 10;
a = "hello";
var b = 10;
//b=true generates error as a is assigned previously number
//Even we didn't specify the type the typescrpt type inference and found the datatype of the variable b.
// type script inferences the type in type inference not all the time.
// Ability to define different types for the same variable is as follows
var myexample;
myexample = 1;
myexample = true;
//For the above code of text we can also declare as any type instead of number,boolean but the difference arises is that if we declare it as anytype then
//more options available for the type of variable but th emethods are not accessible for any type
var myexamples;
myexample = 1;
myexamples = "Ramya"; //mhyexamples. no options will be available 
////Functions
////In typescript evry parameter is a required parameter . If you want a parameter to be optional then add ? at the end of the parameter
//Optional parameter should follow the required parameter but not vice versa.
function addNums(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(addNums(5, 8));
//console.log(addNums("hi",1)); generates error 
//default parameters are the parameters with a set value instead of undefined.
////In tpescript it is possible to define an object as a type
function myfunction(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "Ramya",
    lastname: "adabala"
};
myfunction(p);
function mydetails(student) {
    console.log("Details passed are ".concat(student.firstname, " ").concat(student.lastname, " from city ").concat(student.city));
}
var details = {
    firstname: "Ramya",
    lastname: "A",
    city: "Hyderabad",
    DOB: "8thJune",
    Education: "UG"
};
console.log(mydetails(details));
//Classes and Access modifiers
var myclass = /** @class */ (function () {
    function myclass(name, class1, grade) {
        this.name = name;
        this.class1 = class1;
        this.grade = grade;
        this.name = name;
        this.grade = grade;
        this.class1 = class1;
    }
    myclass.prototype.myclassmethod = function () {
        console.log("Here registered student with name ".concat(this.name, " and class ").concat(this.class1, " with grade ").concat(this.grade));
    };
    return myclass;
}());
var myobj = new myclass("Ramya", 10, "A");
myobj.myclassmethod();
//console.log(myobj.name);
//// Inheritance
//using Inheritance a class can extend other classes and use their properties and methods from their super classes without redeclaring them hence code reusability.
//here we can use myclass2 object to call class1 and class2 properties.
var myclass2 = /** @class */ (function (_super) {
    __extends(myclass2, _super);
    function myclass2(name1, grade1, class2) {
        return _super.call(this, name1, grade1, class2) || this;
    }
    myclass2.prototype.myclassmethod2 = function () {
        console.log("Iam method2 from class2 ".concat(name));
    };
    return myclass2;
}(myclass));
var obj2 = new myclass2("Harini", 15, "O");
//console.log(obj2.name);
obj2.myclassmethod();
obj2.myclassmethod2();
//Access specifiers 
//private -acessible only inside the main class
//protected -accessible inside the main class,derived class and subclass
//public accessible anywhere
