import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./App.css";
import store from "./store";

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main />
    </div>
  );
};

export default App;
