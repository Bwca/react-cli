#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const unit = process.argv[3];
const component = process.argv[4];

if (command !== "g" || unit !== "c" || !component) {
    throw "You might want to read the manual, your command made no sense.";
}

const folderPath =
    `src/${component}`
        .split("/")
        .filter((undefined, i, { length }) => i !== length - 1)
        .join("/") || "src";

const componentName = component
    .split("/")
    .filter((undefined, i, { length }) => i === length - 1)
    .map((i) =>
        i.replace(/(\-(\w)|(^\w))/g, (undefined, letterAfterDash, firstLetter) => {
            return (firstLetter || letterAfterDash).toUpperCase();
        })
    )
    .join();

const componentFolder = `${folderPath}/${componentName}`;

console.log(`component name: ${componentName}`);
console.log(`folder name: ${folderPath}`);

fs.mkdirSync(path.join(__dirname, `${componentFolder}`), { recursive: true });
