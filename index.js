const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const unit = process.argv[3];
const component = process.argv[4];

/* if (command !== "g" || unit !== "c" || !component) {
    throw "You might want to read the manual, your command made no sense.";
} */


console.log(process.argv);

/* 
const folderPath =
    `src/${component}`
        .split("/")
        .filter((undefined, i, { length }) => i !== length - 1)
        .join("/") || "src"; */

/* const componentName = component
    .split("/")
    .filter((undefined, i, { length }) => i === length - 1)
    .map((i) =>
        i.replace(/(\-(\w)|(^\w))/g, (undefined, letterAfterDash, firstLetter) => {
            return (firstLetter || letterAfterDash).toUpperCase();
        })
    )
    .join();

const componentFolder = `src/${component}`;

fs.mkdirSync(path.join(__dirname, `${componentFolder}`), { recursive: true });

fs.writeFileSync(
    path.join(__dirname, `${componentFolder}/${componentName}.tsx`),
    `import { FC } from "react";
    
import { ${componentName}Props } from "./${componentName}.model";
import s from "./${componentName}.module.scss";

export const ${componentName}: FC<${componentName}Props> = () => (
    <>${componentName} works!</>
);`
);

fs.writeFileSync(
    path.join(__dirname, `${componentFolder}/index.ts`),
    `export { ${componentName} } from "./${componentName}";`
);

fs.writeFileSync(
    path.join(__dirname, `${componentFolder}/${componentName}.model.ts`),
    `export interface ${componentName}Props {}`
);

fs.writeFileSync(
    path.join(__dirname, `${componentFolder}/${componentName}.module.scss`),
    ""
);
 */