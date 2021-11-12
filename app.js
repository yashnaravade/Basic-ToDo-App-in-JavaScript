let input = prompt("What do you wanna do?");
const todos = ["Buy Milk", "Go to the gym"];
while (input !== "quit" && input !== "q") {
  {
    if (input === "list") {
      console.log("**********");
      for (let i = 0; i < todos.length; i++) {
        console.log(i + ": " + todos[i]);
      }
      console.log("**********");
    } else if (input === "new") {
      const newTodo = prompt("Enter new todo");
      todos.push(newTodo);
      console.log(`${newTodo} has been added to the list`);
      console.log("**********");
    } else if (input === "delete") {
      const index = prompt("Enter index of todo to delete");
      if (!Number.isNaN(index)) {
        todos.splice(index, 1);
        console.log(`Todo ${index} has been deleted`);
        console.log("**********");
      } else {
        console.log("Invalid input");
        console.log("**********");
      }
    }
    input = prompt("What do you wanna do?");
  }
}
console.log("You quit the game");
