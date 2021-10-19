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

// For storing the value of a new task
let newTask;

// For storing the number of the task to remove
let num;

// For storing the value of the removed task
let removed;





// Displays the menu for the user to select an option. Also sets the users response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (AKA Until the user enters `CLOSE`)
while (userInput !== `CLOSE`){
    
    // Checks if user entered TASKS
    if (userInput === `TASKS`){

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

    // Checks if user entered NEW
    if (userInput === `NEW`){

        // Prompts the user to enter a new task and stores their response
        newTask = prompt(`Please enter a new task to get done:`);

        // Alerts the user that their new task has been added
        alert(`"${newTask}" has been added!`);

        // Adds the users entry as a new item at the end of the tasks array
        tasks.push(newTask);
    }

    // Checks if user entered REMOVE
    if (userInput === `REMOVE`){

        // Concatenates each task/item in the tasks array to the showTasks string variable. Also, sets/displays a number for each task
        for (i = 0; i < tasks.length; i++){

            // Adding 1 to i (AKA the index) so the numbers will start displaying at 1. Also, using "\n" to create a new line (AKA Line break)
            showTasks += `${i + 1}: ${tasks[i]}\n`;
        }
        
        // Prompts the user to enter a number and stores their response to the "num" variable.
        // Also, using "\n" to create a new line (AKA Line break)
        // Subtracting 1 from the users entry so that it matches the index of the item that the user wants to be removed from the tasks array.
        // Just like with ParseInt, JavaScript will attempt to convert a string into a number when you try to subtract from it. So ParseInt is NOT necessary here.
        num = prompt(`Please enter a number to remove:\n\n${showTasks}`) - 1;

        // Removes the task/item selected by the user from the tasks array. Also, sets the task/item that was removed to the REMOVED variable (NOTE: Splice returns the value that is removed as an item(s) in an array)
        removed = tasks.splice(num, 1);

        // Alerts user with the task/item that has been removed (NOTE: Using index on the REMOVED variable here because splice returns the value that is removed as an item in an array)
        alert(`"${removed[0]}" has been removed!`);

        // Sets the value of the showTasks string variable back to an empty string
        showTasks = ``;
    }
    // Displays the menu again
    userInput = prompt(menu);
}


// Alerts the user that they have closed the program
alert(`Thanks for using the To-Do List dude!!`)