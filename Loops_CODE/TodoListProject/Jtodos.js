let input = prompt("What would you like to do?");
const todos = ["buy milk", "find caffe", "eat", "call gp"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********");
    } else if (input === "new") {
        const newTodo = prompt("OK, What to add?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    } else if (input === "delete") {
        const index = parseInt(
            prompt("OK, what do you want to delete? (enter the index)")
        );
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} was deleted.`);
        } else {
            console.log("Invalid index!");
        }
    }
    input = prompt("What would you like to do?");
}

console.log("Ok, you are quit.");
