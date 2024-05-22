/*

//FUNKCJE WYWOŁANIA ZWROTNEGO



function greet(name) {
    return `Welcome ${name}!`;
}

// Wywołujemy funkcję greet i wyświetlamy wynik w konsoli
console.log(greet("Mango")); // "Welcome Mango!"

// Wyświetlamy funkcję greet w konsoli bez jej wywoływania
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}


function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}


function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}


function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
															 // "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
																// "Dear Mango, your room will be ready in 30 minutes"


                                                                
*/
