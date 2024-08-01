import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  //create state variable
  const [isDarkMode, setIsDarkMode] = useState(false);

  //an opposite value is returned
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //returns JSX element
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick = {handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;