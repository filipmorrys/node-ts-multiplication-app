// importamos el api de filesystem
import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = "";

const headerMessage = `
=====================================
         Tabla del ${base}
=====================================

`;

outputMessage += headerMessage;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} * ${i} = ${base * i}\n`;
}

if (showTable) {
  console.log(outputMessage);
}

const outputPath = "outputs";
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(outputPath + `/tabla-${base}.txt`, outputMessage);
