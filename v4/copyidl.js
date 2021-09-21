const fs = require("fs");
const idl = require("./target/idl/v4.json");

fs.writeFileSync("./app/src/idl.json", JSON.stringify(idl));
