import React from "react";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import { store } from "./store/config";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
