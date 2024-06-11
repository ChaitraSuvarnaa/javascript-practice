// singleton 

// object literals

const mySym=Symbol("key1")

const jsUser ={
    name : "Chaitra",
    "full name": "Chaitra Suvarna",
    [mySym]:"mykey1",
    age: 21,
    location: "Mumbai",
    email: "chaitra@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Tuesday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);