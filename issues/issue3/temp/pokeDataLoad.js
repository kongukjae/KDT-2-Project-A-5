import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const root = path.join(__dirName, "../../");

const pokeNameData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/pokemonNames.json"), "utf8")
);

console.log(pokeNameData);
