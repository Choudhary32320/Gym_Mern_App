import React from "react";
import RouteComponent from "./Routes/Route";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
};

export default App;
