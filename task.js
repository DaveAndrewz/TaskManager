// TASK MANAGER


// Using a Template Literal because it recognizes line breaks.
const menu = `TO-DO LIST FOR DAVE ANDREW

What do you want to do buddy? Please enter an option below:

"TASKS" - Display All Things To Complete
"NEW" - Add A New Task To The To-Do List
"REMOVE" - Removes One Of The Things On The To-Do List
"CLOSE" - Closes the To-Do List
`;


// Array for storing all the tasks
const tasks = [
    `Charge MacBook`,
    `Fight Off Imposter Syndrome with The Sword Of JavaScriptery`,
    `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;








// Displays the menu for the user to select an option. Also sets the users response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (AKA Until the user enters `CLOSE`)
while (userInput !== `CLOSE`){
    
    // Checks if user entered TASKS
    if (userInput === 'TASKS'){

        // The for of loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks string variable.
        for (task of tasks){

            // Using "\n" to create a new line (AKA Line break) after each task
            // showTasks = showTasks + `${task}\n`
            showTasks += `${task} \n`; // Shorthand way of above
        }

        // Display the current tasks to the user
        alert(showTasks);

        // Sets the value of the showTasks variable back to an empty string so it won't repeat when you look at the tasks a second time
        showTasks = ``;


    }


    
    // Displays the menu again
    userInput = prompt(menu);
}


// Alerts the user that they have closed the program
alert(`Thanks for using the To-Do List again dude!!`)