const process = require("process");
const child_process = require("child_process");
const fs = require("fs");

process.chdir("extensions/samplecmd");

if (!fs.existsSync("node_modules")) {
  child_process.execSync("yarn", {stdio: "inherit"});
}

child_process.execSync("yarn run package", {stdio: "inherit"});
