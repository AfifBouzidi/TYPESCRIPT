**TP 02 : Declaring Variables**  
there are two ways to declare variables in typscript, by using var or let keywords:  
1. var: a variable declared with var keyword is scoped to the nearest function 
  tsc tp-01.ts | node ts-01.js
2. let: let offer a proper way to declare variable in typescript 
  tsc tp-01.ts
  --> compile error : tp-02.ts(7,31): error TS2304: Cannot find name 'i'.
