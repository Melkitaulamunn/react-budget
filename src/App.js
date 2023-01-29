import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-expense" element={<AddExpense/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;