const fs = require("fs");

// Create a file and write "Hello Node"
fs.writeFileSync("welcome.txt", "Hello Node");

// Read the file content and display it
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
