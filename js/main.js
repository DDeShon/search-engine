import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus on the text input
  setSearchFocus();

  // 3 listeners for clear text button

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
  event.preventDefault();
  // delete the search results
  // process the search
  processTheSearch();
  // set the focus
};

const processTheSearch = async () => {
  // clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
};
