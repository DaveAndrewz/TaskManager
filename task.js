// TASK MANAGER


// Using a Template Literal because it recognizes line breaks.
const menu = `TO-DO LIST FOR DAVE ANDREW

What do you want to do buddy? Please enter an option below:

"TASKS" - Display All Things To Complete
"NEW" - Add A New Task To The To-Do List
"REMOVE" - Removes One Of The Things On The To-Do List
"CLOSE" - Closes the To-Do List
`;

// Displays the menu for the user to select an option. Also sets the users response to the userInput variable
let userInput = prompt(menu);