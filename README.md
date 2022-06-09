# TypeScript-examples
Learn TypeScript

### Notes:

###### Types
- number
- string
- function
- void - means this function has no return statement, doesn't return anything or returns undefined
- undefined - means this function has return statement and returns undefined
- object - very general. cannot get a value from it like obj.prop. So USE { key: type}
- array

###### Define parameter types
- array of objects type { res: number }[]
- function print: () => void
- ! - type it to define that something cannot be null

###### More
Type Aliases->   create your own type ->   type CalculationResults = { res: number; print: () => void }[];
literal types->  printMode: string
Union Types->   printMode: string | number
combine liteal and union type->  "console | "alert"  --- concrete values for type , console OR alert. dowsnt allow other values.
Interfaces-> are good instead of type to force classes to have structure
Generic Types-> when two types working together. it's combination of multiple types. Array<any>  - type is array and inside array s anything.  e.g., CalculationContainer[] ->>> Array<CalculationContainer>  - means array of CalculationContainer

###### About TS files
tsc other.ts - to compile file
tsc app.ts
tsc - compile all TS files
tsc --init - create tsconfig.json
tsc -w - compile and watch file
