import React from "react";

import { Logs } from "./components/Logs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div data-testid="app">
      <Logs />
      {/* <i className="fas fa-binoculars"></i>
      <i className="fas fa-arrows-alt-h"></i> */}
      <FontAwesomeIcon icon={["fas", "binoculars"]} />
    </div>
  );
}

export default App;
