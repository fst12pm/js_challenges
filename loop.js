
/*
this challenge file was created, so that i could writ the code of by heart without using any code refrences, include Visual Studio Code Snippets
*/
//how to write a for loop that prints my name 10 times
for(let i=0;i<10;i++){
    console.log("Ahmed")
}
//how to write a while loop that prints my name 10 times

let count = 0;
while(count<10){
    console.log("Mohamed")
    count++
}
//use if and else chained to print what i do on Sunday,Monday and Saturday
let today = "Friday";

if (today == "Saturday"){
    console.log("Come to coding school")
} else if(today == "Sunday"){
    console.log("Sleep")
} else if(today == "Monday"){
    console.log("go to school")
} else {
    console.log("Do whatever you like")
}
//use switch chained to print what i do on Sunday,Monday and Saturday

switch (today) {
    case "Saturday":
        console.log("Coding time...")
        break;
        
        case "Sunday":
        console.log("Sleep time")
        break;

        case "Monday":
        console.log("Monday")
        break;

    default:
        console.log("Free time")
        break;
}
//how to write a do while
do{
    console.log("Hi Ahmed")
    count++
}
while(count < 20)