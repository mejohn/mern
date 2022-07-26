import React from "react";

// use Route to define different routes
import { Route, Routes } from "react-router-dom";

// import all of our components
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
    return (
        <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    );
}

export default App;