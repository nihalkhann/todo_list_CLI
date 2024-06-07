import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
async function createtodo(todos) {
    let exit = true;
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.yellow("Select an operation"),
            choices: ["add", "update", "view", "delete", "exit"],
        });
        if (ans.select == "add") {
            let select = await inquirer.prompt({
                type: "input",
                message: chalk.blueBright("Add item to todo"),
                name: "todo",
            });
            todos.push(select.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: chalk.yellow("update item in the list"),
                name: "todo",
                choices: todos.map((item) => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo"
            });
            let newtodo = todos.filter((arr) => arr !== updateTodo.todo);
            todos = [...newtodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select an item for delete",
                name: "todo",
                choices: todos.map((m) => m)
            });
            let newdeletetodo = todos.filter(s => s !== deleteTodo.todo);
            todos = [...newdeletetodo];
            console.log(todos);
        }
        if (ans.select == "exit") {
            exit = false;
        }
    } while (exit);
}
createtodo(todos);
