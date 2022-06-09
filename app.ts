// class User {
//   // in TS need to add fields OR new feature to add inside parantheses to parameters public,private [see below]
//   name: string; // by default is public
//   private age: number; // private only accessible inside class

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//!! Interfaces are good instead of type to force classes to have structure
interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}
// extend a class
class Admin extends User {
  constructor(name: string, age: number, public permissions: string[]) {
    super(name, age);
  }
}

const user = new User("Max", 30);
console.log(user.name);

const num1Input = document.getElementById("num1") as HTMLInputElement; // type casting to get inputElement not just htmlElement
const num2Input = <HTMLInputElement>document.getElementById("num2"); // the same as "as"
const buttonElement = document.querySelector("button")!; // ! - means it cannot be null

// function returns number
function add(a: number, b: number) {
  return a + b;
}

type PrintMode = "console" | "alert";
// function doesn't return anything
function printResult(result: number, printMode: PrintMode) {
  // (result: number): void
  if (printMode === "console") {
    console.log(result);
  } else if (printMode === "alert") {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false; // type for let will be Boolean here
// const isDoneConstant = false; // type for constant will be the value assigned to variable.
// printResult(result);

interface CalculationContainer {
  res: number;
  print(): void;
}

// we can use interface as type. Interface also can be used for classes
type CalculationResults = CalculationContainer[]; // this is type alias

fetch("");
let results: Array<CalculationContainer> = [];
const names = ["Max"];
// click button and call func
buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value; // + to cast the string into number
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);

  //   results[0].print();
  printResult(result, "console");
  printResult(result, "alert");
});

function logAndEcho<T>(val: T) {
  // generate type while call func
  console.log(val);
  return val;
}
logAndEcho("Hi there!").split(" ");

// Types:
// number
// string
// function
// void - means this function has no return statement, doesn't return anything or returns undefined
// undefined - means this function has return statement and returns undefined
// object - very general. cannot get a value from it like obj.prop. So USE { key: type}
// array

// define parameter types
// array of objects type { res: number }[]
// function print: () => void
// ! - type it to define that something cannot be null

// Type Aliases->   create your own type ->   type CalculationResults = { res: number; print: () => void }[];
// literal types->  printMode: string
// Union Types->   printMode: string | number
// combine liteal and union type->  "console | "alert"  --- concrete values for type , console OR alert. dowsnt allow other values.
// Interfaces-> are good instead of type to force classes to have structure
// Generic Types-> when two types working together. it's combination of multiple types. Array<any>  - type is array and inside array s anything.  CalculationContainer[] ->>> Array<CalculationContainer>  - means array of CalculationContainer

// about TS files
// tsc other.ts - to compile file
// tsc app.ts
// tsc --init - create tsconfig.json
// tsc - compile all TS files
// tsc -w - compile and watch file
