let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,14)

// console.log(myCreatedDate.toDateString());

// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)) //converts miliseconds into seconds and removes decimal 

console.log(myDate.toLocaleString('default',{
    weekday: "long"
}))