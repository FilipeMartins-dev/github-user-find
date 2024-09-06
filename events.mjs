import { inputSearch, searchButton, output } from "./components.mjs";
import { search, handleKey, handleKeyBar } from "./index.js"

searchButton.addEventListener("click", search)
document.addEventListener('keydown', handleKey)
document.addEventListener('keydown', handleKeyBar)