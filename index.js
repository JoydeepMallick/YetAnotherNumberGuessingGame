const minNum = 1;
const maxNum = 100;
//since value of random in decimal we multiply with needed range to generate values in range 
//avoid random since it can overflow
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum); 


let attempts = 0;
let guess;
let running = true;

while ( running ){
    guess = window.prompt(`Guess a Number between ${minNum} and ${maxNum}`);
    console.log(typeof guess);
    attempts++;
    //convert string to number for guess before comparison for clarity, not using Number as it can extract numbers from string which is not needed
    guess = parseInt(guess);
     if(isNaN(guess)){
        console.log("Please enter a valid number");
        window.alert("Please enter a valid number");
        continue;
    }
    
    console.log(typeof guess);

    if(guess === answer){
        console.log("You got it right");
        window.alert("You got it right, the correct answer is " + answer + " and you took " + attempts + " attempts");
        running = false; 
    }else if(guess < answer){
        console.log("Guess is too low");
        window.alert("Guess is too low");
    }else{
        console.log("Guess is too high");
        window.alert("Guess is too high");
    }

    if(attempts > 50){
        console.log("You have reached maximum attempts");
        window.alert("You have reached maximum attempts");
        running = false;
    }
}
