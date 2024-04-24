import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import CandidatesList from "./pages/CandidatesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CandidatesList />
    </>
  );
}

export default App;
