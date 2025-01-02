import { Routes } from "react-router-dom";
import Form from "./Components/Form";
import { Route } from "react-router-dom";
import Data from "./Components/Data";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
};
export default App;
