import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";
import TimezoneDetails from "./pages/TimezoneDetails";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path="/:countryname/:zoneName/:gmtOffset/:timestamp"
          element={<TimezoneDetails />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
