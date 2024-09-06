import { input, searchButton, output } from "./components.mjs";
import { search, handleKey } from "./index.js"

searchButton.addEventListener("click", search)
document.addEventListener('keydown', handleKey)