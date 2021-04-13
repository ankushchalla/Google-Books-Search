import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from "./components/Search";
import Saved from "./components/Saved";
import API from './utils/API';

function App() {
  let [library, setLibrary] = useState([])

  useEffect(() => {
    API.getAllBooks().then(dbLibrary => {
      setLibrary(dbLibrary.data);
    })
  }, [])

  const deleteBook = (title) => {
    API.deleteBook(title);
    const newLibrary = library.filter(book => book.title !== title);
    setLibrary(newLibrary)
  }

  return (
    <Router>
      <Navbar />
      <div className="container">
        <header className="mt-3">
          <h1>Google Books Search</h1>
          <h5>Search for and Save Books of Interest</h5>
        </header>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved books={library} deleteBook={deleteBook} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
