import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "../pages/Homepage";
import Info from "../components/Info/Info";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
};

// let port = process.env.PORT;
// if (port === null || port === "") {
//   port = 3000;
// }

// app.listen(port, function() {
//   console.log("started");
// });

export default App;
