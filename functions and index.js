//What will be the output for each problem?

// Problem 1
let x = 30;
console.log(x);

// Problem 2
console.log(typeof 30);

// Problem 3
console.log(typeof 30.0);

// Problem 4
console.log(typeof "30.0");

// Problem 5
console.log(30 + 30.0);

// Problem 6
console.log(30 + "30.0");

// Problem 7
console.log(30 + 30.0 + "30.0");

// Problem 8
console.log("30" + 30.0);

// Problem 9
let y = 42;
console.log(y + 30);

// Problem 10
let y = 42;
console.log("y + 30");

// Problem 11
let y = 42;
console.log("y" + 30);

// Problem 12
let y = 42;
console.log(y + "30");

// Problem 13
let y = 42;
console.log(y + "30" + 40.5);

// Problem 14
let y = 42;
console.log(y = 12);

// Problem 15
let y = 42;
console.log(y == 12);

// Problem 16
let y = 42;
console.log(y <= 12);

// Problem 17
let y = 42;
console.log(y >= 12);

// Problem 18
let y = [42, 2, 22];
console.log(y[2]);

// Problem 19
let y = [42, 2, 22];
console.log(y[22]);

// Problem 20
let y = [42, 2, 22];
console.log(y[2]==42);

// Problem 21
let y = [42, 2, 22];
console.log(y[2]==22);

// Problem 22
let y = [42, 2, 22];
console.log(22==y[2]);

// Problem 23
let y = [42, 2, 22];
console.log(2==y[2]);

// Problem 24
let y = [42, 2, 22];
console.log(2<y[2]);

// Problem 25
let y = [42, 2, 22];
console.log("2==y[2]");

// Problem 26
let y = [42, 2, 22];
let z = 0;
console.log(y[0] == z);

// Problem 27
let y = [42, 2, 22];
let z = 0;
console.log(y[z]);

// Problem 28
let y = [42, 2, 22];
let z = 0;
console.log(y[z+z]);

// Problem 29
let y = [42, 2, 22];
let z = 0;
console.log(y[z+z]);

// Problem 30
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + y[z]);

// Problem 31
let y = [42, 2, 22];
let z = 0;
console.log(y[z + z] + y[z]);

// Problem 32
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + y[z + 1]);

// Problem 33
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + "y[z]");

// Problem 34
let y = [42, 2, 22];
let z = 0;
console.log(y[z + 2] + y[z + z + 1]);

// Problem 35
let y = [42, 2, 22];
let z = 0;
console.log(y[z + 2] + y[z + z + 1] + y[z + z + 1] + z + 5);

// Problem 36
let y = [42, 2, 22];
let z = 0;
console.log(y[z] == y[z + z]);

// Problem 37
let y = [42, 2, 22];
let z = 0;
console.log(y[z] == (y[z] + y[z]));

// Problem 38
let y = [42, 2, 22];
let z = 0;
console.log(y[z] < (y[z] + y[z]));

// Problem 39
let y = [42, 2, 22];
let z = 0;
console.log(y[z] <= y[z+z]);

// Problem 40
let y = [42, 2, 22];
let z = 0;
console.log(y[z] < y[z+z]);

// Problem 41
let y = [10, 30, 50];
let z = 1;
console.log(y[z - 1] + y[z + 1]); 
/*Output 60 jer zbrajamo indexe y-a. 0-ti + 2-i su 10 i 50.  +*/

// Problem 42
let y = [100, 200, 300];
let z = 2;
console.log(y[z - 1] * y[z - 2]);
/* Sad mnozimo tako da je 200 * 100 = 20000 +*/

// Problem 43
let y = [5, 10, 15];
let z = 1;
console.log(y[z] + y[z + 1] * y[z - 1]);
/* Output je 85 jer se prvo kao i kod ljudi radi operacija mnozenja a onda zbrajanja +*/

// Problem 44
let y = [9, 18, 27];
let z = 1;
console.log(y[z] * (y[z - 1] + y[z + 1]));
/* Output je 648 jer su druge dvije zagrade u jednoj tako da prvo njih zbrajamo i onda mnozimo s 18 +*/

// Problem 45
let employee = {id: 123, name: "Steve", position: "Manager"};
let position = "position";
if (employee.position == "Manager") {
  console.log("Yes");
} else {
  console.log("No");
}
/* Output je Yes, zato sto if statement ulazi u employee objekt, trazi position koji je u ovom slucaju menadzer. Gleda da li odgovara da je menager=menager i vraća Yes. +*/

// Problem 46
let product = {name: "Laptop", price: 1500, stock: 30};
let discount = 200;
console.log(product.price - discount);
/* Vraća 1300 jer ulazi u price objekta, vidi da je 1500 i oduzima mu 200 koji je definiran u discountu. +*/

// Problem 47
let book = {title: "JavaScript Basics", author: "John Doe", pages: 200};
let pages = "pages";
console.log(book[pages] + 50);
/* Output je pages50  -*/

// Problem 48
let user = {username: "Alice123", password: "password456", email: "alice@example.com"};
let key = "email";
console.log(user[key].toUpperCase());
/* Ulazi u objekt i ispisuje email velikim slovima +*/

// Problem 49
let car = {make: "Honda", model: "Civic", year: 2021};
let carDetails = "model";
console.log(car[carDetails] + " " + car.year);
/* Output je Civic 2021 Jer trazi model i trazi godinu, a u objektu je oboje definirano. + */

// Problem 50
let animal = {species: "Dog", age: 5, color: "Brown"};
let newAge = animal.age + 1;
console.log(newAge);
/* Printa6 jer zbraja objektove age sto je 5 i nadodaje mu 1 +*/

// Problem 51
let students = [
    {name: "Alice", grade: 90},
    {name: "Bob", grade: 85},
    {name: "Charlie", grade: 88}
  ];
  let index = 1;
  console.log(students[index].name + " has grade " + students[index].grade);
  /* Za svakog studenta ce ispisat "ime" has grade "grade" iz objekta. -*/

  // Problem 52
  let products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 700}
  ];
  let discount = 100;
  console.log(products[2].name + " price after discount: " + (products[2].price - discount)); 
  /* Tablet price after discount: 600 +*/

    // Problem 53
    let users = [
        {username: "john_doe", email: "john@example.com"},
        {username: "jane_doe", email: "jane@example.com"}
      ];
      let userIndex = 0;
      console.log(users[userIndex].username + " - " + users[userIndex].email);
      /* Output john-doe - john@example.com +*/

      // Problem 54
  let cars = [
    {make: "Toyota", model: "Camry", year: 2020},
    {make: "Honda", model: "Civic", year: 2021}
  ];
  let carIndex = 1;
  console.log("Car model: " + cars[carIndex].model + ", Year: " + cars[carIndex].year);
  /* Car model: Civic, Year: 2021 +*/

   // Problem 55
   let library = [
    {title: "JavaScript for Beginners", author: "John Smith", pages: 200},
    {title: "Advanced JavaScript", author: "Jane Doe", pages: 300}
  ];
  let bookIndex = 0;
  console.log(library[bookIndex].title + " by " + library[bookIndex].author);
  /* JavaScript for Beginners by John Smith + */

  // Problem 56
  let pets = [
    {name: "Buddy", species: "Dog", age: 3},
    {name: "Whiskers", species: "Cat", age: 2}
  ];
  let petIndex = 1;
  console.log(pets[petIndex].name + " is a " + pets[petIndex].species + " aged " + pets[petIndex].age);
  /* Whiskers is a cat aged 2 + */

    // Problem 57
let x = [10, 20, 30, 40];
let y = {a: 2, b: 5};
console.log(x[2] * y.a - y.b);
/* 55 + */ 

// Problem 58
let x = [100, 200, 300];
let y = {p: 20, q: 50};
console.log(x[0] - y.p + x[2] - y.q);
/* Output 330 + */

// Problem 59
let x = [25, 30, 35];
let y = {m: 1000, n: 500};
console.log(x[1] + y.m - y.n);
/* 530 +*/

// Problem 60
let x = [90, 80, 70];
let y = {g1: 10, g2: 5};
console.log(x[0] + y.g1 - y.g2);
/* Output 95 + */

// Problem 61
let x = [5, 10, 15, 20];
let y = {a: 3, b: 2};
console.log(x[1] ** y.a + y.b);
/* Output 1002 +*/ 

// Problem 62
let x = [10, 20, 30, 40];
let y = {m: 5, n: 15};
console.log((x[3] - y.m) * (x[1] / y.n));
/* 46.77... +/- */

// Problem 63
let x = [7, 14, 21, 28];
let y = {a: 3, b: 4};
console.log(x[2] % y.a + y.b); 
/* Output 4 jer je ostatak od 21 / 3 = 7 i ostatak 0 + 4 = 4 + */

// Problem 64
let x = [5, 15, 25];
let y = {p: 2, q: 1};
console.log(x[0] + x[1] * y.p - x[2] / y.q);
/* Output 10 + */

// Problem 65
let x = [10, 5, 3];
let y = {m: 8, n: 2};
console.log((x[0] + y.m) * (x[1] - y.n) / x[2]);
/* Output je 18 */

// Problem 66
let x = [10, 20, 30, 40];
let y = {a: 1, b: 2, c: 3};
console.log(x[y.a + y.b] - x[y.c]);
/* Output 0 jer je zbroj 1 i 2. indexa 40 i onda -40 je =0 + */

// Problem 67
let x = [5, 10, 15, 20, 25];
let y = {a: 0, b: 2, c: 1};
console.log(x[y.a + y.b] * x[y.c + y.b]);
/* Output 500 - */    

// Problem 68
let x = [2, 4, 6, 8, 10];
let y = {p: 0, q: 2, r: 1};
console.log(x[y.p + y.q] - x[y.r * y.p]);
/* Vraća broj 4 + */

 // Problem 69
 let x = [1, 2, 3, 4, 5];
 let y = {a: 2, b: 1};
 console.log(x[x[y.a] - y.b]);
 /* Output 3 jer trazimo y.a od x-a sto je 3 ali sami y-b je jednak 1 i ne trazimo 1. index od x-a jer nigdje ne trazi. + */ 

  // Problem 70
let x = [100, 200, 300, 400, 500];
let y = {m: 1, n: 2};
console.log(x[x[y.m + y.n]] / 2);  
/* Vraća NaN, jer se undefined / 2 definira kao undefined racuna kao da nije broj tako da se pretvara cijela jednadzba u NaN - */ 

// Problem 71
let x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let y = {a: 1, b: 2};
console.log(x[y.a][y.b]);  
/* Output izgleda ovako: 4,5,6 7,8,9 -                        stvarni output: 6 - trazi array [4,5,6] i sa y.b ulazi u y.a i trazi 2.index sto je broj 6 */

 // Problem 72
 let x = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
 let y = {a: 0, b: 1};
 console.log(x[y.a][y.b]);
 /* Output je broj 20 + */

  // Problem 73
let x = [[100, 200], [300, 400], [500, 600]];
let y = {a: 2, b: 0};
console.log(x[y.a][y.b]);     
/* Output je broj 500 +*/ 

//Problem 74
let x = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
let y = {a: 0, b: 1};
let z = {p: 2};
console.log(x[y.a][y.b] * x[y.a][z.p]); 
/* Output je broj 600  + */

let x = [[5, 10, 15], [20, 25, 30], [35, 40, 45]];
let y = {a: 2, b: 0};
let z = {p: 1};
console.log(x[y.a][y.b] + x[z.p][y.b]); 
/* Output je broj 55 +*/

 // Problem 76
 let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
 let y = {a: 1, b: 2};
 let z = {p: 0};
 console.log(x[y.a][y.b] - x[z.p][z.p]);   
 /* Output je broj 15 */

 // Problem 77
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2,1,0]
let z = [1,2,0]
console.log(x[y[0]][z[0]] == x[z[0]][y[0]])
/* Output je false zbog usporedbe == na prvom x-dobivamo broj 24, na drugom x-u dobivamo broj 18 i znaci da 24 nije jednak 18 + */

// Problem 78
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2,1,0]
let z = [1,2,0]
console.log(x[y[2]] == x[z[2]])
/* Tvrdnja je true +*/  

// Problem 79
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2,1,0]
let z = [1,2,0]
console.log(x[z[y[1]]][z[2]] + x[z[2]][y[z[0]]])  
/* -,   stvarni output je 27...  */ 

// Problem 80
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2,1,0]
let z = [1,2,0]
console.log(x[y[1]][y[1]] + x[y[z[0]]][y[1]] * x[y[1]][z[0]])
/* Output je jednak 240  +*/

// Problem 81
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2,1,0]
let z = [1,2,0]
if (y[z[0]] > z[y[0]]) {
    console.log(x[1][0])
} else {
    console.log(z)
}
/* ispis je 12 zato sto je 1 > 0 kod usporedivanja index-a + */

// Problem 82
let x = [[3, 6, 9], [12, 15, 18], [21, 24, 27]];
let y = [2, 1, 0];
let z = [0, 2, 1];
function checkCondition(array1, array2, array3) {
    if (array1[array2[0]][array3[1]] > array1[array3[0]][array2[2]]) {
        console.log(3+3*3);
    } else {
        console.log(3-3*3);
    }
}
checkCondition(x, y, z);ž
/* Output je 3+3*3 sto je rezultat 12 +*/

// Problem 83
let x = [[4, 8, 12], [16, 20, 24], [28, 32, 36]];
let y = [1, 0, 2];
let z = [2, 1, 0];
function evaluateCondition(array1, array2, array3) {
    if (array1[array2[1]][array3[0]] < array1[array3[2]][array2[0]]) {
        console.log(3+3/3+3);
    } else {
        console.log(3-3/3-3);
    }
    /* Output je broj 7 +*/
}
evaluateCondition(x, z, y);

// Problem 84
let x = [[4, 8, 12], [16, 20, 24], [28, 32, 36]];
let y = [1, 0, 2];
let z = [2, 1, 0];
function evaluateCondition(array1, array3, array2) {
    if (array1[array2[1]][array3[0]] < array1[array3[2]][array2[0]]) {
        console.log("My name is Sue");
    } else if (array1[array2[1]][array3[0]] == array1[array3[2]][array2[0]]) {
        console.log("How do you do?");
    } else {
        console.log("Now you gonna die");
    }
}
evaluateCondition(x, z, y);
/* Output je ispis: Now you gonna die +*/  

//Problem 85
let x = [0,1,2,3,4,5];
function func1(y){
  for (let i=0; i<y.length;i++){
    console.log(y[i]);
  }
}
func1(x);
/* kada call-amo func1(x) index krece od 0 i ide sve dok index manji od x.lengtha sto znaci da ce ispis biti 0,1,2,3,4,5 +*/

//Problem 86
let x = [0,1,2,3,4,5];
function func1(y){
  for (let i=y.length; i>=0;i--){
    console.log(y[i]);
  }
}
func1(x);
/* Output je 6,5,4,3,2,1 ali printa i 0 jer nam pise dok je index veci ili jednak 0. -*/

//Problem 87
let x = [0,1,2,3,4,5];
function func1(y){
  for (let i=y.length; i>=0;i=i-2){
    console.log(y[i]);
  }
}
func1(x);
/* Output su brojevi undefined, 4, 2, 0 +*/

//Problem 88
let x = [0,1,2,3,4,5];
function func1(y){
  for (let i=2; i<y.length;i=i+3){
    console.log(y[i]);
  }
}
func1(x);
/* Funckija krece od index-a 2 i dok je manji od 6 vrti funkciju i svaki put kad krene ponovi na index doda broj 3. Znaci ispis je 2,5  +*/

//Problem 89
let x = [0,1,2,3,4,5];
function func1(y){
  for (let i=0; i<y.length;i++){
    if (i%2==1){
        console.log(y[i])
    };
  };
};
func1(x);
/* Izbacuje brojeve 1,3 i 5 jer su ostaci tih brojeva podijeljenih s 2 broj 1 sto trazimo u funckiji. +*/

//Problem 90
let x = [0,1,2,3,4,5];
function func1(y){
  let z = 0;
  for (let i=0; i<y.length;i++){
    if (i%2==0){
        z += y[i];
    }
  }
  console.log(z)
}
func1(x);
/* - */
