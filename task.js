// TASK MANAGER


// Using a Template Literal because it recognizes line breaks.
const menu = `TO-DO LIST FOR DAVE ANDREW

What do you want to do buddy? Please enter an option below:

"TASKS" - Display All Things To Complete
"NEW" - Add A New Task To The To-Do List
"REMOVE" - Removes One Of The Things On The To-Do List
"CLOSE" - Closes the To-Do List
`;

const wrongMenu = `TO-DO LIST FOR DAVE ANDREW

You didn't type one of the items below dude, you tired?
Try again my man!!

"TASKS" - Display All Things To Complete
"NEW" - Add A New Task To The To-Do List
"REMOVE" - Removes One Of The Things On The To-Do List
"CLOSE" - Closes the To-Do List
`;

// Displays the menu for the user to select an option. Also sets the users response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (AKA Until the user enters `CLOSE`)
while (userInput !== `CLOSE`){
    if (userInput === `TASKS`){
        alert(`This is the TASKS feature`)
    }
    if (userInput === `NEW`){
        alert(`This is the NEW feature`)
    }
    if (userInput === `REMOVE`){
        alert(`This is the REMOVE feature`)
    }

    // Displays the menu again
    userInput = prompt(wrongMenu);
}


// Alerts the user that they have closed the program
alert(`Thanks for using the To-Do List again dude!!`)