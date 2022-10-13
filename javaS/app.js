// const dayOfWeek = "Tuesday"

// if (dayOfWeek === "Monday") {
//     console.log("Oh No! Not again!")
// }
// else if (dayOfWeek === "Tuesday"){
//     console.log ("At last it is not a Monday!")
// }


// const age = 64;
// if (age < 5) {console.log ("FREE")}
// else if (age < 10) { console.log ("10$")}
// else if (age < 65) {console.log ("20$")}
// else {console.log ("senior 10$")};

// const password = prompt("Pleas enter password");

// if(password.length >= 6) {
//     if(password.indexOf(" ") === -1){
//         console.log("Password is valid")
//     } 
//     else {
//         console.log("Password can not contain spaces")
//     }
// }
// else {console.log("Password too short")}




// for(let i= 1; i<=10; i++) {
//     console.log(i);
// }


// for(let i=1; i<=6; i++){
//     console.log("Da ba dee da ba daa")
//     }

// for (let i=100; i>=0; i-=10){
//     console.log(i)
// }

// const letters=["a","b","c"]
// for (let i= 0; i<letters.length; i++){
//     console.log(i,letters[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for( let i= 0; i<people.length; i++){
//     console.log(i,people[i].toUpperCase())
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for(let i=0; i<seatingChart.length; i++){
    const row = seatingChart[i]
    console.log (`ROW #${i+1}`)
    for (let j= 0; j<row.length; j++){
        console.log(`  ${row[j]}`)
    }
}