#!/usr/bin/env node

const { mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const command = process.argv[2];
const unit = process.argv[3];
const component = process.argv[4];

if (command !== "g" || unit !== "c" || !component) {
    throw "You might want to read the manual, your command made no sense.";
}

const componentFolder = `src/${component}`;
const currentWorkingDirectory = process.cwd();

const componentName = component
    .split("/")
    .filter((undefined, i, { length }) => i === length - 1)
    .map((i) =>
        i.replace(/(\-(\w)|(^\w))/g, (undefined, letterAfterDash, firstLetter) => {
            return (firstLetter || letterAfterDash).toUpperCase();
        })
    )
    .join();

mkdirSync(join(currentWorkingDirectory, `${componentFolder}`), {
    recursive: true,
});

writeFileSync(
    join(currentWorkingDirectory, `${componentFolder}/${componentName}.tsx`),
    `import { FC } from "react";
    
import { ${componentName}Props } from "./${componentName}.model";
import s from "./${componentName}.module.scss";

export const ${componentName}: FC<${componentName}Props> = () => <>${componentName} works!</>;\n`
);

writeFileSync(
    join(currentWorkingDirectory, `${componentFolder}/index.ts`),
    `export { ${componentName} } from "./${componentName}";`
);

writeFileSync(
    join(currentWorkingDirectory, `${componentFolder}/${componentName}.model.ts`),
    `export interface ${componentName}Props {}`
);

writeFileSync(
    join(currentWorkingDirectory, `${componentFolder}/${componentName}.module.scss`),
    ""
);
