//What will be the output for each problem?

// Problem 1
let x = 30;
console.log(x);
/* vraća broj 30  + */

// Problem 2
console.log(typeof 30);
/* vraća number - trazimo type a ne broj. Znaci type = number + */

// Problem 3
console.log(typeof 30.0);
/* Opet imamo typeof sto znaci da je type = number bez obzira dal je float ili integer* +/

// Problem 4
console.log(typeof "30.0");
/* Tu vraća result string posto imamo navodnike koji nam pokazuju da je "30.0" string  + */

// Problem 5
console.log(30 + 30.0);
/* Vraća 60 jer je zbroj tih brojeva cijeli broj  + */

// Problem 6
console.log(30 + "30.0");
/* Vraća 30 30.0 jer je prvi 30 broj koji zbraja, a drugi broj je string tak da u ispisu zapravo zbraja broj i string + */

// Problem 7
console.log(30 + 30.0 + "30.0");
/* Tu zbraja prva dva broja jer su po typu brojevi i onda dodaje string na njih tak da ispis ide 60 30.0 + */

// Problem 8
console.log("30" + 30.0);
/* Pošto imamo "30" prvo sve ostalo ce se ponasati kao string tako da ce se 1. stringu pridruziti 30.0 tako da ispis izgleda 30 30.0 -*/

// Problem 9
let y = 42;
console.log(y + 30);
/* zbraja 42 + 30 = 72, jer je y = 42 + */

// Problem 10
let y = 42;
console.log("y + 30");
/* loga y + 30 jer je sve u stringu. + */

// Problem 11
let y = 42;
console.log("y" + 30);
/* Tu kao output opet imamo string tako da izbaci y 30 posto se sve iza y-a ponaša kao string + */

// Problem 12
let y = 42;
console.log(y + "30");
/* posto nam je y definiran kao broj 42 izbacuje 42 30 posto nam je 30 string  + */

// Problem 13
let y = 42;
console.log(y + "30" + 40.5);
/* y=42 sto znaci da ce output izgledat 42 30 40.5 jer nam je y ispred stringa a sve iza stringa se racuna opet kao string +-  */
/* u vs-u izbacuje 4230 kao output?? */

// Problem 14
let y = 42;
console.log(y = 12);
/*Izbaci error - */

// Problem 15
let y = 42;
console.log(y == 12);
/* izbaci false jer 42 nije jednako 12 + */

// Problem 16
let y = 42;
console.log(y <= 12);
/* false + */

// Problem 17
let y = 42;
console.log(y >= 12);
/* true  + */

// Problem 18
let y = [42, 2, 22];
console.log(y[2]);
/* Izbaci 22 jer je broj 22 po arrayu dobio index broj 2 + */

// Problem 19
let y = [42, 2, 22];
console.log(y[22]);
/* Nece izbacit nista(undefined) jer 22. index ne postoji, ako zelimo ispisat broj 22 trebamo ici po indexima.. znaci y[2] + */

// Problem 20
let y = [42, 2, 22];
console.log(y[2]==42);
/* Ovaj log provjerava da li je 2. index od y-a jednak broju 42, posto uzimamo 2.index nas broj 22 nije jednak 42 i izbacuje false  +*/

// Problem 21
let y = [42, 2, 22];
console.log(y[2]==22);
/* Ovaj log provjerava da li je nas 2. index jednak broj 22 sto znaci da bi provjera bila 22 = 22 i output je onda true + */

// Problem 22
let y = [42, 2, 22];
console.log(22==y[2]);
/* Sad je obrnuto, provjerava da li je 22 jednak nasem indexu broj 2 sto je u ovom slucaju true  + */

// Problem 23
let y = [42, 2, 22];
console.log(2==y[2]);
/* Ovdje provjerava da li je 2 jednak nasem 2. indexu u arrayu, ali posto je nas index 2 = 22, to znaci da 2 nije jednak 22 - false + */

// Problem 24
let y = [42, 2, 22];
console.log(2<y[2]);
/* Provjera da li je 2 manji od naseg drugog indexa i kad pretvorimo vidimo da je 2 manji od 22 i nas log je onda true + */

// Problem 25
let y = [42, 2, 22];
console.log("2==y[2]");
/* U ovom stringu je najbitnije zapamtit da ispisuje cijeli string i ne vodi racunske operacije tako da nam je output jednak stringu + */

// Problem 26
let y = [42, 2, 22];
let z = 0;
console.log(y[0] == z);
/* Ovdje trazi da li je nas index 0 od y-a (u ovom slucaju 42) jednak z-u koji je definiran kao 0. Nas index 0 koji je 42 nije jednak 0 i izbacuje false + */

// Problem 27
let y = [42, 2, 22];
let z = 0;
console.log(y[z]);
/* Ispisuje brojeve y-a i onda ispise z koji je jednak 0? - */

// Problem 28
let y = [42, 2, 22];
let z = 0;
console.log(y[z+z]);
/* Ovdje posto je z=0 zbraja 0 + 0 i trazi index od y koji je onda jednak 0 i ispisuje nam broj 42 jer je to 0-ti index od y-a  + */

// Problem 29
let y = [42, 2, 22];
let z = 0;
console.log(y[z+z]);
/* Isti zadatak kao i 28. - valjda zabuna */

// Problem 30
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + y[z]);
/* Tu imamo racunsku operaciju. Prvo trazi 0-ti index od y-a koji je =42 i onda opet te ih onda zbroji. Tako da je output 84  + */

// Problem 31
let y = [42, 2, 22];
let z = 0;
console.log(y[z + z] + y[z]);
/*Pocinjemo sa zbrajanjem index-a u zagradi. 0 + 0 = 0, znaci imamo nulti index od y-a sto je 42 + opet 0-ti index od y-a sto je opet 42, i sada zbrajamo 42+42= 84 +  */

// Problem 32
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + y[z + 1]);
/* Pocinjemo s lijeve na desnu stranu. 0-ti index od y-a je 42. Sada zbrajamo z+1 sto znaci da trazimo 1. index jer nam je pocetni z=0. Prvi index je broj 2 i dolazimo do zakljucka da je 42 + 2 = 44 + */

// Problem 33
let y = [42, 2, 22];
let z = 0;
console.log(y[z] + "y[z]");
/* Ovdje trazimo 0-ti index od y-a sto je 42. Posto je drugi dio jednadzbe string output ce nam bit 42 "y[z]" */

// Problem 34
let y = [42, 2, 22];
let z = 0;
console.log(y[z + 2] + y[z + z + 1]);
/* Prvo imamo z+2 to nam je 2. index sto je broj 22. Drugu zagradu rjesavamo prvi z = 0 drugi z = 0 ali na njega dodajemo 1 sto znaci da ide onda opet 0 +1 = 1. Trazimo 1. index a to je broj 2. Zatim zbrajamo brojeve 2+2 = 24 +*/

// Problem 35
let y = [42, 2, 22];
let z = 0;
console.log(y[z + 2] + y[z + z + 1] + y[z + z + 1] + z + 5);
/*1.index je = 22. 2.index = 2. 3.index = 2. 4.index = 42 i dodajemo 5 na kraju. Output je 73 - */
/* Ne trazimo 0-ti index od y-a jer nije definirano, a sami z = 0 tako je na kraju ispada output 31 */

// Problem 36
let y = [42, 2, 22];
let z = 0;
console.log(y[z] == y[z + z]);
/* Izbaci true jer ce se u drugoj zagradi zbrojit 0 + 0 = 0, onda trazi 0-ti index sto je 42. I onda nam dolazi 42 = 42 +*/

// Problem 37
let y = [42, 2, 22];
let z = 0;
console.log(y[z] == (y[z] + y[z]));
/* Izbaci false jer u drugoj zagradi to znaci da zbrajamo indexe. znaci 42 nije jednak zbroju 42 + 42 sto ovu tvrdnju cini neistinitom. + */

// Problem 38
let y = [42, 2, 22];
let z = 0;
console.log(y[z] < (y[z] + y[z]));
/* Zbog operatora ova tvrdnja je true. Znaci 0-ti index = 42 je manji od zbroja 2 0-ta indexa 42 + 42 = 84. Na kraju imamo da je 42 manji od 84 - true + */

// Problem 39
let y = [42, 2, 22];
let z = 0;
console.log(y[z] <= y[z+z]);
/* Zbog operatora ova tvrdnja je true je zbroj z-ova 0, sto znaci da je 42 = 42. Posto imamo manje ili jednako tvrdnja ispada true. Kada bi samo imali manje onda bi tvrdnja bila false + */

// Problem 40
let y = [42, 2, 22];
let z = 0;
console.log(y[z] < y[z+z]);

/* E sada vrijedi objasnjenje iz zadatka 39. sto cini ovu tvrdnju false. + */