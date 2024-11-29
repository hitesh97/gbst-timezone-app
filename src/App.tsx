import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage";
import TimezoneDetails from "./pages/TimezoneDetails";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
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
  </Provider></QueryClientProvider>
);

export default App;
