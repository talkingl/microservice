import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./example.json");
console.log(data);
