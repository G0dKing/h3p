import {} from "react";
import InProgress from "@page/InProgress";
import Home from "@page/Home";

function App() {
  const isInProgress = import.meta.env.VITE_PLACEHOLDER;
  return (
    <>
      {isInProgress} (
      <InProgress /> : <Home />
      )
    </>
  );
}

export default App;
