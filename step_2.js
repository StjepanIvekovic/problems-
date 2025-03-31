// Assign two variables to values 5 and 6. Write code logic that will swap values in 
// these two variables. (without using number 5 and 6 again)

  let x = 17 % 6; 
let y = 18 / 3; 
console.log(x,y);
//Krivo
// Hint: prva linija je let x=5, y=6; nakon toga pišeš neku logiku koja će zamjenit vrijednosti u varijablama
//       Ne radis ponovno assignment u varijable x i y nakon te prve linije nego nekim drugim naredbama 
//       zamjeniš vrijednost tako da u y bude 5 a u x bude 6
  
// Assign a variable to a value of 12. Write code that will multiply the value of this variable by 5
// and store the result back in the same variable.

 let value = 12;  
let multiplyVariable = value * 5;
console.log(multiplyVariable);
// Krivo
// Hint: piše "and store the result back in the same variable". koristi operator *=


// Use two variables. Write code that three times checks if these two variables are equal.
// Results of these checks must be in this order - true, false, true. Each variable can be 
// assigned at most 2 times.
let a = 10; 
let b = 10; 
console.log(a === b); 

 a = 25; 
console.log(a === b); 

b = 25; 
console.log(a === b); 
// Točno, ali ja sam krivo zado zadatak :)
// Umjesto zadnje rečenice "Each variable can be assigned at most 2 times." Treba biti
// "Variable a can be assigned 2 times, and variable b only once." Probaj tak rjesit.


// U Const poglavlju pise ovo "It does not define a constant value. It defines a constant 
// reference to a value.". Jel razumijs kaj to znaci? Kaj je referenca, a kaj je value?

// Assign one variable as "37" and other as "7". both string. Compare them with > or < and 
// write it with console log.

let x = "37"; 
let y = "7";
let result = x > y; 
console.log(result); 
// Točno. Jel znaš zašto "37">"7" kao rezultat daje false?
 
// Assigne three variables to 0, 10 and undefined. On all three apply operator that checks if 
// variable is undefined if it is, value is assigned.
let x = 0; 
let y = 10; 
let z; 

x ??= 20;  
y ??= 20; 
z ??= 20;  


console.log(x,y, z); 
//Točno


// Declare a variable x outside of a block and assign it a value of 12. 
// Also declare a global variable y=20. Inside the block, declare another variable x with
// a value of 5. In that block add new block and assign x to 3. In that block create new
// block and assign x to 3 and y to 50. Print (console.log) both variables inside each scope that exists. 
// Try to understand the output.

 let x = 12; 
let y = 20;  
console.log(x, y); 
{
    let x = 5; 
    console.log(x, y); 
    {
        let x = 3; 
        console.log(x, y); 
        {
            let = 3; 
            let y = 50; 
            console.log(x,y); 
        }
    }
}
//Točno, jedino y piše da treba bit globalni pa je var y=20 na pocetku (umjesto let)

// Declare and assigne variables x and y. Izračunaj potenciju x na y i spremi u varijablu z.
// Do it all with just 2 lines of code.

 let x = 4, y = 5, z;
console.log(z = x**y); 
//Točno


// Assign a variable `a` to 15, `b` to undefined, and `c` to 25. 
// Write code that checks if `b` is undefined. If so, assign it the value of `a`.
// Then, write a check to see if `c` is undefined, and if so, assign it the value of `b`.
// Print all the values at the end.

let a = 15; 
let b; 
let c = 25; 

b ??= a; 
c ??= b; 
console.log(a,b,c); 
//Točno
