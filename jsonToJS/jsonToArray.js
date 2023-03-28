const spawn = require("child_process").spawn;

const process = spawn("python", ["./convert.py", "data.json"]);

process.stdout.on("data", (data) => {
  console.log(data.toString());
});
