import { setSearchFocus } from "./searchBar.js";
import { buildSearchResults } from "./searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus on the text input
  setSearchFocus();

  // TODO:  3 listeners for clear text button

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
  event.preventDefault();
  // TODO:  delete the search results
  // process the search
  processTheSearch();
  // set the focus
  setSearchFocus();
};

const processTheSearch = async () => {
  // TODO:  clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  // TODO:  set stats line function
};
