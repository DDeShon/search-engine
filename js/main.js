import {
  clearSearchText,
  clearPushListener,
  showClearTextButton,
  setSearchFocus,
} from "./searchBar.js";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from "./searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus on the text input
  setSearchFocus();

  // TODO:  2 listeners for clear text button

  // clear text in search field when the clear button is clicked
  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  // clearSearchText();

  // clearPushListener();
  // show delete text button when input is detected
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  // submit search terms
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
  event.preventDefault();

  // delete the search results
  deleteSearchResults();

  // process the search
  processTheSearch();

  // set the focus
  setSearchFocus();
};

const processTheSearch = async () => {
  // clear the stats line
  clearStatsLine();

  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  setStatsLine(resultArray.length);
};
