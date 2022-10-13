// function singSong() {
//     console.log("do");
//     console.log("re");
//     console.log("mi");
// }

function greet(person) {
    console.log(`Hi ${person}!`);
}

function love(food) {
    console.log(`I love ${food}`);
}

function rant(message) {
    for (let i = 0; i < 3; i++) {
        if (typeof message === number) {
        }
        console.log(String(message).toUpperCase());
    }
}

// rant("I hate beets");

function repeat(str, numTimes) {
    result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
// isSnakeEyes(1,1)
// isSnakeEyes(1,2)

function multiply(num1, num2) {
    return num1 * num2;
}

function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    }
    return false;
}
// isShortsWeather(76)

function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    return array[array.length - 1];
}
// lastElement([4, 5, 6])

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}
capitalize("lol");

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function returnDay(num) {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const day = days[num-1]
    return day ? day : null
}

function returnDay(num) {
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    return days[num - 1] || null;
}

function returnDay(num) {
    const days = {
        1: "mon",
        2: "tue",
        3: "wed",
        4: "thu",
        5: "fri",
        6: "sat",
        7: "sun",
    };
    return days[num] || null;
}

// console.log("Hello!");
// setTimeout(function(){
//     console.log("knok knok?")
// },2000);
// // setTimeout(function(){ 
// //     console.log("bye!")
// // },4000)
//  console.log("bye!");


