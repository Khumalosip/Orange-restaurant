console.log("Hello World!")

console.log("HYPE'S REALLY COOL INTERACTIVE CODING ENVIRONMENT")

// Testing if statement

let price = 20;
const summerDiscount = 5;
const winterDiscount = 10;

let summerSale = true ;

if (summerSale == true ){
    price = price - summerDiscount;
}
else{
    price = price - winterDiscount;
}

console.log("Final Price:" , price);

// double and single equals

const age = 23;

if (age >= 18){
    console.log("USER IS AN ADULT")
}
else{
    console.log("USER IS A MINOR")
}

// OR 

const ageofPerson = 23;

if (ageofPerson < 18){
    console.log("USER IS AN MINOR")
}
else{
    console.log("USER IS A ADULT")
}

// Admin, Customer, Enterprise

const userType = "admin";

if (userType === "admin"){
    console.log("ADMIN USER LOGGED IN");
}

else if (userType === "customer"){
    console.log("CUSTOMER LOGGED IN")
}

else {
    console.log("ENTERPRISE USER LOGGED IN")
}

// Comparison Given 3 Variables

const a = 10;
const b = "10";
const c = true;

// Compare a == b

if (a == b){
    console.log("true")
}
else{
    console.log(false)
}

// Compare a===b

if (a === b){
    console.log("true")
}
else{
    console.log(false)
}

// Compare a == c

if (a == c){
    console.log("true")
}
else{
    console.log(false)
}

// Compare a === c 

if (a === c){
    console.log("true")
}
else{
    console.log(false)
}


// Root, Superadmin, Admin, Customer, Enterprise

const userType = "enterprise";

switch (userType) {
    case "root":
        console.log("ROOT USER LOGGED IN");
        break;
    case "super-admin":
        console.log("SUPERADMIN  LOGGED IN");
        break;
    case "admin":
        console.log("ADMIN USER LOGGED IN");
        break;
    case "customer":
        console.log("CUSTOMER  LOGGED IN");
        break;
    case "enterprise":
        console.log("ENTERPRISE USER  LOGGED IN");
        break; 
    default:
        console.log("NO USER LOGGED IN")
}

console.log("DONE")