import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      {/* <SignupPage /> */}
      <Routes>
        <Route to="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
