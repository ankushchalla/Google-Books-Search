import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./components/Search";
import Saved from "./components/Saved";

function App() {
  let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  let authors = ["J.R.R. Tolkein"];
  let book = {
    title: "Fellowship of the Ring",
    authors, 
    description,
    image: "https://via.placeholder.com/150", 
    link: "/somelink",
  }
  let books = [book];
  return (
    <div className="App">
      <div className="container">
        <header className="mt-3">
          <h1>Google Books Search</h1>
          <h5>Search for and Save Books of Interest</h5>
        </header>
        <Search />
        <Saved books={books} />
      </div>
    </div>
  );
}

export default App;